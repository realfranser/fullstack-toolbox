package models

import (
	"gorm.io/gorm"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
)

var productDB *gorm.DB

type Product struct {
	ID     			uint		`json:"id" gorm:"primaryKey"`
	Name 				string	`json:"name"`
	Category 		string 	`json:"category"`
	Price 			float32 `json:"price"`
	Stock 			uint16	`json:"stock" validate:"required"`
	Description string 	`json:"description"`
}

type ProductList struct {
	Items				[]Product									`json:"items"`
	Pagination	tools.PaginationResponse 	`json:"pagination"`
}

type ProductListRequest struct {
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

func GetProductsByCategory(category string, offset int, pageSize int) (products []Product, count int64) {
	var Products []Product
	productDB.Raw("SELECT COUNT(*) FROM products WHERE category=?", category).Scan(&count)
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
