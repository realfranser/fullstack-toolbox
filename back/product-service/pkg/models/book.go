package models

import (
	"github.com/jinzhu/gorm"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
)

var db *gorm.DB

type Book struct {
	gorm.Model
	Name string `json:"name"`
	Author string `json:"author"`
	Category string `json:"category"`
	Stock uint16	`json:"stock"`
	Description string `json:"description"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Book{})
}
