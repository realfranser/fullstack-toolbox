package config

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	db_example *gorm.DB
)

func Connect_Example() {
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local",
		DBUser,
		DBPassword,
		DBHost,
		DBPort,
		DBName,
	)

  d, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db_example = d
}

func GetDB_Example() *gorm.DB {
	return db_example
}
