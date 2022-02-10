package tests

import (
	"fmt"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)

type ProductListMock struct {
	Url				string										`json:"url"`
	Request 	models.ProductListRequest `json:"request"`
	Response 	models.ProductList				`json:"response"`
	Status		int												`json:"status"`
}


const (
	PRODUCT_ENDPOINT = "/api/v1/product"
	PRODUCTS_ENDPOINT = "/api/v1/products"
	PRODUCTS_BY_CATEGORY = 10
	BASE_TEST_CATEGORY = "test_cat_"
)

var (
	productCategories = [...]string{
		BASE_TEST_CATEGORY + "0",
		BASE_TEST_CATEGORY + "1",
		BASE_TEST_CATEGORY + "2",
		BASE_TEST_CATEGORY + "3",
	}
)

var productListByCategoryMocks = []ProductListMock{
	/* Default mock */
	{
		Url: PRODUCTS_ENDPOINT + fmt.Sprintf("/%s", productCategories[0]),
		Request: models.ProductListRequest{
			Pagination: tools.Pagination{
				PageSize: tools.DEFAULT_PAGE_SIZE,
				PageIndex: tools.DEFAULT_PAGE_INDEX,
			},
		},
		Response: models.ProductList{
			Items: GenerateProductList(tools.DEFAULT_PAGE_SIZE, tools.DEFAULT_OFFSET, productCategories[0]),
			Pagination: tools.PaginationResponse{
				PageCount: uint(PRODUCTS_BY_CATEGORY/tools.DEFAULT_PAGE_SIZE),
			},
		},
		Status: 200,
	},
	/* Multiple page mock */
	{
		Url: PRODUCTS_ENDPOINT + fmt.Sprintf("/%s", productCategories[0]),
		Request: models.ProductListRequest{
			Pagination: tools.Pagination{
				PageSize: tools.DEFAULT_PAGE_SIZE / 2,
				PageIndex: tools.DEFAULT_PAGE_INDEX + 1,
			},
		},
		Response: models.ProductList{
			Items: GenerateProductList(tools.DEFAULT_PAGE_SIZE, tools.DEFAULT_PAGE_SIZE / 2, productCategories[0]),
			Pagination: tools.PaginationResponse{
				PageCount: uint(PRODUCTS_BY_CATEGORY/(tools.DEFAULT_PAGE_SIZE / 2)),
			},
		},
		Status: 200,
	},
}
