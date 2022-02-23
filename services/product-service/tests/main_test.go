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
