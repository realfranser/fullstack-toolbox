package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/utils"
)

var NewProduct models.Product

func GetAllProducts(w http.ResponseWriter, r *http.Request) {
	newProducts := models.GetAllProducts()
	res, _ := json.Marshal(newProducts)
	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetProductById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	productId := vars["productId"]
	ID, err := strconv.ParseInt(productId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	productDetails, _ := models.GetProductById(ID)
	res, _ := json.Marshal(productDetails)
	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	var createProduct = &models.Product{}
	utils.ParseBody(r, createProduct)
	b := createProduct.CreateProduct()
	res, _ := json.Marshal(b)
	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	productId := vars["productId"]
	ID, err := strconv.ParseInt(productId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	product := models.DeleteProduct(ID)
	res, _ := json.Marshal(product)
	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	var updateProduct = &models.Product{}
	utils.ParseBody(r, updateProduct)
	vars := mux.Vars(r)
	productId := vars["productId"]
	ID, err := strconv.ParseInt(productId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	productDetails, db := models.GetProductById(ID)
	if updateProduct.Name != "" {
		productDetails.Name = updateProduct.Name
	}
	if updateProduct.Category != "" {
		productDetails.Category = updateProduct.Category
	}
	/* WARNING: posible mistake at checking null int value from DB, check README sources */
	if updateProduct.Price != 0 {
		productDetails.Price = updateProduct.Price
	}
	if updateProduct.Stock != 0 {
		productDetails.Stock = updateProduct.Stock
	}
	if updateProduct.Description != "" {
		productDetails.Description = updateProduct.Description
	}
	db.Save(&productDetails)
	res, _ := json.Marshal(productDetails)
	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

