package tests

import (
	"os"
	"testing"

	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
	"gorm.io/gorm"
)

var db *gorm.DB

func TestMain(m *testing.M) {
	start()
	code := m.Run()
	os.Exit(code)
}

func start() {
	config.Connect()
	db = config.GetDB()
}

func createTestTable(table *struct{}) (err error){


	db.Exec()


	if db.AutoMigrate(table); err != nil {
		return err
	}
	return nil
}

func createTestData(data []interface{}) (err error){
	if db.Create(&data); err != nil {
		return err
	}
	return nil
}

func clearTestTable() {
	db.Exec()
}
