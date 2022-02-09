package tests

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)


func GenerateProduct(id int) (models.Product){
	product := models.Product{
			Name:					fmt.Sprintf("product_%d", id),
			Category:			fmt.Sprintf("category_%d", id),
			Price:				1,
			Stock:				1,
			Description:	fmt.Sprintf("description_%d", id),
	}

	return product
}

func GenerateProductList(n int, category string) ([]models.Product){
	var productList []models.Product
	for i := 0; i < n; i++ {
		product := GenerateProduct(i)
		productList = append(productList, product)
	}

	return productList
}

func DeleteIdField(productList models.ProductList) (result models.ProductList){
	for i, _ := range productList.Items {
		productList.Items[i].ID = 0
	}
	return productList
}

func TestGetProductsByCategory(t *testing.T) {
	/* Create products for all categories in the product_service_test database */
	db.AutoMigrate(&models.Product{})
	for _, category := range productCategories {
		productList := GenerateProductList(PRODUCTS_BY_CATEGORY, category)
		db.Create(&productList)
	}

	/* Call the controller */
	mockID := 0
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

	var body models.ProductList
	json.Unmarshal(rr.Body.Bytes(), body)
	responseBody := DeleteID()
	CheckResults(productListByCategoryMocks[mockID].Status,
		productListByCategoryMocks[mockID].Response,
		rr.Code,
		body,
	)
	/* Compare expected results and handler results */
	expectedStatus := productListByCategoryMocks[mockID].Status
	structBody := productListByCategoryMocks[mockID].Response
	expectedBody, _ := json.Marshal(structBody)
	if status := rr.Code; status != expectedStatus {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, productListByCategoryMocks[mockID].Status)
	}
	if rr.Body.String() != string(expectedBody) {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), string(expectedBody))
	}

	/* Delete data from the product_service_test database */
	db.Delete(models.Product{}, "category LIKE ?", BASE_TEST_CATEGORY + "%")
}
