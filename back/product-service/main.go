package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"text/template"
)

type product struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Category string `json:"Category"`
	Price float32 `json:"price"`
	Stock int `json:"stock"`
	Description string `json:"description"`
}

var products product

func handler(w http.ResponseWriter, r *http.Request) {

products = product{
	ID:    products.ID,
	Name:  products.Name,
	Stock: products.Stock,
	Price: products.Price,
}

appointment, _ := template.ParseFiles("ot.html")
appointment.Execute(w, products)
}

func main() {
	fmt.Println("Go MySQL Tutorial")

sqlType := "mysql"
sqlUsn := "root"
sqlPass := "2582064"
sqlDatabase := "gowdb"

db, err := sql.Open(sqlType, sqlUsn+":"+sqlPass+"@/"+sqlDatabase)
if err != nil {
	panic(err.Error())
}

defer db.Close()

results, err := db.Query("SELECT * FROM products")
if err != nil {
	panic(err.Error())
}

for results.Next() {

	err = results.Scan(&products.ID, &products.Stock, &products.Price, &products.Name)
	if err != nil {
		panic(err.Error())
	}

	log.Println(products.Name)
}

if err != nil {
	panic(err.Error())
}

http.HandleFunc("/", handler)
http.ListenAndServe(":8080", nil)
}
