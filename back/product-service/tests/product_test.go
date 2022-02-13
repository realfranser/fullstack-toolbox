package tests

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
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

	/* Call the controller */
	for mockID := range mocks.ProductListByCategoryMocks {
		requestBody, err := CreateBody(mocks.ProductListByCategoryMocks[mockID].Request)
		if err != nil {
			t.Fatal(err)
		}
		req, err := http.NewRequest("GET", mocks.ProductListByCategoryMocks[mockID].Url, requestBody)
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()

		/* Need to create a router so that the var will be added to context */
		router := mux.NewRouter()
		router.HandleFunc(fmt.Sprintf("%s/{category}", mocks.PRODUCTS_ENDPOINT), controllers.GetProductsByCategory)
		router.ServeHTTP(rr, req)

		/* Compare expected results and handler results */
		expectedBody, responseBody := helpers.DeleteIdField(mocks.ProductListByCategoryMocks[mockID].Response, rr.Body.Bytes())
		expectedStatus := mocks.ProductListByCategoryMocks[mockID].Status
		t.Logf("Test %d -> %s", mockID, mocks.ProductListByCategoryMocks[mockID].MockDescription)
		if status := rr.Code; status != expectedStatus {
			t.Errorf("handler returned wrong status code: got %v want %v",
				status, expectedStatus)
		}
		if expectedBody != responseBody {
			t.Errorf("handler returned unexpected body: got %#v want %#v",
				responseBody, expectedBody)
		}
	}
	/* Delete data from the product_service_test database */
	db.Delete(models.Product{}, "category LIKE ?", mocks.BASE_TEST_CATEGORY + "%")
}
