package config

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	db_example *gorm.DB
)

func Connect_Example() {
	dsn := "user:pass@tcp(127.0.0.1:3306)/product_service?charset=utf8mb4&parseTime=True&loc=Local"
  d, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db_example = d
}

func GetDB_Example() *gorm.DB {
	return db_example
}
