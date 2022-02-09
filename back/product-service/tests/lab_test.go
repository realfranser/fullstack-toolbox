package tests

import (
	"fmt"
	"testing"

	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)

func DeleteID(body models.ProductList) (res models.ProductList){
	for i, _ := range body.Items {
		item.ID = 0
	}
	return body
}

func TestDeleteID(t *testing.T) {
	var pax models.ProductList = productListByCategoryMocks[0].Response
	res := DeleteID(pax)
	fmt.Printf("This is the new body: %+v\n", res)
}
