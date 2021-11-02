package main

import (
	"fmt"
	"net/http"
)

type product struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Category string `json:"Category"`
	Price float32 `json:"price"`
	Stock int `json:"stock"`
	Description string `json:"description"`
}

func handler(w http.ResponseWriter, r *http.Request) {
}

func main() {
	fmt.Println("Go MySQL Tutorial")

	http.HandleFunc("/", handler)
	http.ListenAndServe(":18002", nil)
}
