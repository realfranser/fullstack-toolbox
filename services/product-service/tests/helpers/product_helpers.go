package helpers

import (
	"encoding/json"
	"fmt"

	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)

func GenerateProduct(id int, category string) (models.Product){
	product := models.Product{
			Name:					fmt.Sprintf("product_%d", id),
			Category:			category,
			Price:				1,
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

func DeleteIdField(expectedProductList models.ProductListResponse, responseProductList []byte) (expectedBody string, responseBody string){
	var resBody models.ProductListResponse
	json.Unmarshal(responseProductList, &resBody)
	for i := range expectedProductList.Items {
		expectedProductList.Items[i].Id = 0
		resBody.Items[i].Id = 0
	}
	return fmt.Sprintf("%v", expectedProductList), fmt.Sprintf("%v", resBody)
}
