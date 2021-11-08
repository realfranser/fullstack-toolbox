package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
)

var RegisterProductRoutes = func(router *mux.Router){
	router.HandleFunc("/product/", controllers.CreateBook).Methods("POST")
	router.HandleFunc("/product/", controllers.GetAllBooks).Methods("GET")
	router.HandleFunc("/product/{productId}", controllers.GetBookById).Methods("GET")
	router.HandleFunc("/product/{productId}", controllers.UpdateBook).Methods("PUT")
	router.HandleFunc("/product/{productId}", controllers.DeleteBook).Methods("DELETE")
}
