package models

import (
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
	"gorm.io/gorm"
)

var productDB *gorm.DB

type Product struct {
	gorm.Model
	Name 				string	`json:"name"`
	Category 		string 	`json:"category"`
	Price 			float32 `json:"price"`
	Stock 			uint16	`json:"stock"`
	Description string 	`json:"description"`
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

func GetProductById(Id int64) (*Product, *gorm.DB) {
	var getProduct Product
	productDB := productDB.Where("ID=?", Id).Find(&getProduct)
	return &getProduct, productDB
}

func DeleteProduct(ID int64) Product {
	var product Product
	productDB.Where("ID=?", ID).Delete(&product)
	return product
}
