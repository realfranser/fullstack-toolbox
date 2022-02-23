package tests

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"

	testTools "github.com/realfranser/fullstack-toolbox/back/go-tools/helpers"
	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/tests/helpers"
	"github.com/realfranser/fullstack-toolbox/back/product-service/tests/mocks"
)

func TestGetProductsByCategory(t *testing.T) {
	/* Create products for all categories in the product_service_test database */
	db.AutoMigrate(&models.Product{})
	db.Delete(models.Product{}, "category LIKE ?", mocks.BASE_TEST_CATEGORY + "%")
	for _, category := range mocks.ProductCategories {
		productList := helpers.GenerateProductList(mocks.PRODUCTS_BY_CATEGORY, tools.DEFAULT_OFFSET, category)
		db.Create(&productList)
	}

	/* Run all subtests */
	for _, tt := range mocks.ProductListByCategoryMocks {
		t.Run(tt.MockDescription, func(t *testing.T) {
			requestBody, err := testTools.CreateBody(tt.Request)
			if err != nil {
				t.Fatal(err)
			}
			req, err := http.NewRequest("GET", tt.Url, requestBody)
			if err != nil {
				t.Fatal(err)
			}
			rr := httptest.NewRecorder()

			/* Need to create a router so that the var will be added to context */
			router := mux.NewRouter()
			router.HandleFunc(fmt.Sprintf("%s/{category}", mocks.PRODUCTS_ENDPOINT), controllers.GetProductsByCategory)
			router.ServeHTTP(rr, req)

			/* Compare expected results and handler results */
			expectedBody, responseBody := helpers.DeleteIdField(tt.Response, rr.Body.Bytes())
			expectedStatus := tt.Status
			if status := rr.Code; status != expectedStatus {
				t.Errorf("handler returned wrong status code: got %v want %v",
					status, expectedStatus)
			}
			if expectedBody != responseBody {
				t.Errorf("handler returned unexpected body: got %#v want %#v",
					responseBody, expectedBody)
			}
		})
	}

	/* Delete data from the product_service_test database */
	db.Delete(models.Product{}, "category LIKE ?", mocks.BASE_TEST_CATEGORY + "%")
}
