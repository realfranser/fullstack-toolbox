package tests

import (
	"math"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)

type ProductListMock struct {
	Url				string										`json:"url"`
	Request 	models.ProductListRequest `json:"request"`
	Response 	models.ProductList				`json:"response"`
}

type category int

const (
	PRODUCTS_BY_CATEGORY = 10
	PRODUCT_ENDPOINT = "/api/v1/product"
	PRODUCTS_ENDPOINT = "/api/v1/products"
	DEFAULT_PRODUCT_CATEGORY category = iota
	DEFAULT_PAGE_SIZE
)

var (
	productCategories = [...]string{"winter", "spring", "summer", "autum"}
	winter_products_items []models.Product = Generate
)

var productListMocks = []ProductListMock{
	ProductListMock{
		Url: PRODUCTS_ENDPOINT + "/winter",
		Request: tools.Pagination{
			PageSize: 10,
			PageIndex: 1,
		},
		Response: models.ProductList{
			Items: ,
			Pagination: tools.PaginationResponse{
				PageCount: math.Ceil(PRODUCTS_BY_CATEGORY/DEFAULT_PAGE_SIZE),
			},
		},
	}
}

var paginationRequestList = []tools.Pagination{
	tools.Pagination{
		PageSize: 10,
		PageIndex: 1,
	},
	tools.Pagination{
		PageSize: 20,
		PageIndex: 2,
	},
	tools.Pagination{
		PageSize: 1,
		Offset: 12,
	},
	tools.Pagination{
		PageSize: 0,
		PageIndex: 0,
	},
}

func Pax(hola string) {
	productList := Generate
}
