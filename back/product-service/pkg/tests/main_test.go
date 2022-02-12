package tests

import (
	"bytes"
	"encoding/json"
	"io"
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

func CreateBody(rawBody interface{}) (body io.Reader, err error){
	jsonData, err := json.Marshal(rawBody)
	if err != nil {
		return nil, err
	}

	return bytes.NewBuffer(jsonData), nil
}
