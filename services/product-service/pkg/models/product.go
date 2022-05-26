package models

import (
	"gorm.io/gorm"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
)

var productDB *gorm.DB

type Product struct {
	Id					int				`json:"id"`
	Name 				string		`json:"name"`
	Category 		string 		`json:"category"`
	Price 			float32 	`json:"price"`
	Premium			bool			`json:"premium" default:"false"`
	Description string 		`json:"description"`
}

type ProductResponse struct {
	Id					int				`json:"id"`
	Name 				string		`json:"name"`
	Category 		string 		`json:"category"`
	Price 			float32 	`json:"price"`
	Premium			bool			`json:"premium" default:"false"`
	Stock				int				`json:"stock"`
	ColorList		[]string	`json:"color_list"`
	SizeList		[]string	`json:"size_list"`
	ImageUrl		string		`json:"image_url"`
	Description string 		`json:"description"`
}

type ProductListResponse struct {
	Items				[]ProductResponse					`json:"items"`
	Pagination	tools.PaginationResponse 	`json:"pagination"`
}

type ProductListRequest struct {
	Sort				string						`json:"sort"`
	Color				string						`json:"color" default:"%"`
	Size 				string						`json:"size" default:"%"`
	Pagination	tools.Pagination	`json:"pagination"`
}

func init() {
	config.Connect()
	productDB = config.GetDB()
	productDB.AutoMigrate(&Product{})
}

func (p *Product) CreateProduct() *Product {
	productDB.Create(&p)
	return p
}

func GetAllProducts() []Product {
	var Products []Product
	productDB.Find(&Products)
	return Products
}

func GetProductsByCategory(category string, offset int, pageSize int, params ProductListRequest) (products []Product, count int64) {
	var Products []Product
	color := params.Color
	size := params.Size
	productDB.Raw(`SELECT COUNT(*)
		FROM products p, colors c, sizes si, stock st
		WHERE p.category=? AND p.id=c.product_id AND p.id=si.product_id
			AND c.name LIKE ? 
			AND si.name LIKE ?`, category, color, size).Scan(&count)
	productDB.Where("category=?", category).Offset(offset).Limit(pageSize).Find(&Products)
	return Products, count
}

func GetProductById(Id int64) (*Product, *gorm.DB) {
	var getProduct Product
	productDB := productDB.Where("ID=?", Id).Find(&getProduct)
	return &getProduct, productDB
}

func DeleteProduct(Id int64) Product {
	var product Product
	productDB.Where("ID=?", Id).Delete(&product)
	return product
}
