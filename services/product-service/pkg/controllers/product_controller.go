package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/helpers"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/models"
)

func GetAllProducts(w http.ResponseWriter, r *http.Request) {
	// TODO: fix this
	//newProducts := models.GetAllProducts()
	var NewProductList models.ProductListResponse
	//NewProductList.Items = newProducts
	res, _ := json.Marshal(NewProductList)

	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetProductsByCategory(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	category := vars["category"]
	var productsRequest = &models.ProductListRequest{}
	tools.ParseBody(r, productsRequest)

	offset, pageSize := tools.Paginate(&productsRequest.Pagination)

	var NewProductList models.ProductListResponse
	// TODO: fix this
	//newProducts, productCount := models.GetProductsByCategory(category, offset, pageSize, *productsRequest)
	_, productCount := models.GetProductsByCategory(category, offset, pageSize, *productsRequest)
	//NewProductList.Items = newProducts
	NewProductList.Pagination.PageCount = uint(int(productCount)/pageSize)
	tools.RespondWithJSON(w, http.StatusOK, NewProductList)
}

func GetProductById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	productId := vars["productId"]
	ID, err := strconv.ParseInt(productId, 0, 0)
	if err != nil {
		tools.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	productDetails, _ := models.GetProductById(ID)
	res, _ := json.Marshal(productDetails)

	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	var createProduct = &models.Product{}
	fmt.Print(r.URL.Query())
	if errCode, err := tools.ParseBody(r, createProduct); err != nil {
		tools.RespondWithError(w, errCode, err.Error())
		return
	}

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
		tools.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	product := models.DeleteProduct(ID)
	res, _ := json.Marshal(product)

	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	var updateProduct = &models.Product{}
	tools.ParseBody(r, updateProduct)
	vars := mux.Vars(r)
	productId := vars["productId"]
	ID, err := strconv.ParseInt(productId, 0, 0)
	if err != nil {
		tools.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
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
	if updateProduct.Description != "" {
		productDetails.Description = updateProduct.Description
	}
	productDetails.Premium = updateProduct.Premium

	db.Save(&productDetails)
	res, _ := json.Marshal(productDetails)

	w.Header().Set("Content-Type", "pkglocation/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
