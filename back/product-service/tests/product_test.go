package tests

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)


func GenerateProduct(id int, category string) (models.Product){
	product := models.Product{
			Name:					fmt.Sprintf("product_%d", id),
			Category:			category,
			Price:				1,
			Stock:				1,
			Description:	fmt.Sprintf("description_%d", id),
	}

	return product
}

func GenerateProductList(n int, offset int, category string) ([]models.Product){
	var productList []models.Product
	for i := offset; i < n; i++ {
		product := GenerateProduct(i, category)
		productList = append(productList, product)
	}

	return productList
}

func DeleteIdField(expectedProductList models.ProductList, responseProductList []byte) (expectedBody string, responseBody string){
	var resBody models.ProductList
	json.Unmarshal(responseProductList, &resBody)
	for i := range expectedProductList.Items {
		expectedProductList.Items[i].ID = 0
		resBody.Items[i].ID = 0
	}
	return fmt.Sprintf("%v", expectedProductList), fmt.Sprintf("%v", resBody)
}

func TestGetProductsByCategory(t *testing.T) {
	/* Create products for all categories in the product_service_test database */
	db.AutoMigrate(&models.Product{})
	db.Delete(models.Product{}, "category LIKE ?", BASE_TEST_CATEGORY + "%")
	for _, category := range productCategories {
		productList := GenerateProductList(PRODUCTS_BY_CATEGORY, tools.DEFAULT_OFFSET, category)
		db.Create(&productList)
	}

	/* Call the controller */
	for mockID := range productListByCategoryMocks {
		requestBody, err := CreateBody(productListByCategoryMocks[mockID].Request)
		if err != nil {
			t.Fatal(err)
		}
		req, err := http.NewRequest("GET", productListByCategoryMocks[mockID].Url, requestBody)
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()

		/* Need to create a router so that the var will be added to context */
		router := mux.NewRouter()
		router.HandleFunc(fmt.Sprintf("%s/{category}", PRODUCTS_ENDPOINT), controllers.GetProductsByCategory)
		router.ServeHTTP(rr, req)

		/* Compare expected results and handler results */
		expectedBody, responseBody := DeleteIdField(productListByCategoryMocks[mockID].Response, rr.Body.Bytes())
		expectedStatus := productListByCategoryMocks[mockID].Status
		t.Logf("Test %d -> %s", mockID, productListByCategoryMocks[mockID].MockDescription)
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
	db.Delete(models.Product{}, "category LIKE ?", BASE_TEST_CATEGORY + "%")
}
