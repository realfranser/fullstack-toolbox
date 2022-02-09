package tests

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
	"gorm.io/gorm"
)

var db *gorm.DB

func TestMain(m *testing.M) {
	start()
	code := m.Run()
	os.Exit(code)
}

func start() {
	test := true
	config.Connect(test)
	db = config.GetDB()
}

func executeRequest(method string, url string, body []byte) (res *http.Response, err error){
	req, err := http.NewRequest(method, url, bytes.NewBuffer(body))
	if err != nil {
		panic(err)
	}

	w := httptest.NewRecorder()
	controllers.GetProductsByCategory(w, req)
	res = w.Result()
	defer res.Body.Close()
	return res, nil
}
