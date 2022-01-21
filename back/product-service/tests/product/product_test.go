package tests

import (
	"testing"

	product "github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
)

func TestGetAllProducts(t *testing.T) {
	got := product.GetAllProducts(t)
}
