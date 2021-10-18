package models

import (
	"database/sql"
	"encoding/json"
	"entities"
	"net/http"

	"github.com/realfranser/fullstack-toolbox/back/inventory-product-service/src/entities"
)

type ProductModel struct {
	Db *sql.DB
}

func (productModel ProductModel) FindAll() (product []entities.Product, err error) {
	rows, err := productModel.Db.Query("select * from product")
	if err != nil {
		return nil, err
	}

	var products []entities.Product
	for rows.Next {
		var id int64
		var name string
		var price float64
		var quantity int64
		err2 := rows.Scan(&id, &name, &price, &quantity)
		if err2 != nil {
			return nil, err2
		}
	}
}

func respondWithError(w http.ResponseWriter, code int, msg string) {
	respondWithJson(w, code, map[string]string{"error": msg})
}

func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}
