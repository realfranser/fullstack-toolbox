package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

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
		product := models.Product{
			Name:					fmt.Sprintf("product_%d", i),
			Category:			category,
			Price:				float32(i),
			Stock:				uint16(i),
			Description:	fmt.Sprintf("description_%d", i),
		}
		productList = append(productList, product)
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
}

func TestGetProductsByCategory(t *testing.T) {
	/* Adding PRODUCTS_BY_CATEGORY * size(categories) rows to the test product table */
	db.AutoMigrate(&models.Product{})

	for _, category := range productCategories {
		productList := GenerateProductList(PRODUCTS_BY_CATEGORY, category)
		db.Create(&productList)
	}

	/* Call the getProductByCategory endpoint */
	pagination := paginationRequestList[0]
	var expectedResponseBody models.ProductList
	expectedResponseBody.Items = GenerateProductList(pagination.PageSize, productCategories[0])
	expectedResponseBody.Pagination.PageCount = uint(pagination.PageSize)
	request := models.ProductListRequest{Pagination: paginationRequestList[0]}
	jsonData, _ := json.Marshal(request)
	req, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/%s", PRODUCTS_ENDPOINT, productCategories[0]), bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	ctx := context.WithValue(req.Context(), DEFAULT_PRODUCT_CATEGORY, "winter")
	fmt.Printf("This is the context value: %v\n", req.Context().Value("category"))
	w := httptest.NewRecorder()
	controllers.GetProductsByCategory(w, req.WithContext(ctx))
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	var pax models.ProductList
	json.Unmarshal(data, &pax)
	fmt.Printf("This is the response body: %v\n\n", pax)

	if err != nil {
		t.Errorf("error: %v", err)
	}
	jsonExpectedResponseBody, _ := json.Marshal(expectedResponseBody)
	if !bytes.Equal(data, jsonExpectedResponseBody) {
		t.Errorf("expected %v and got %v", expectedResponseBody, data)
	}

	db.Migrator().DropTable(&models.Product{})
}
