package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
)

var RegisterBookRoutes = func(router *mux.Router){
	router.HandleFunc("/book", controllers.CreateBook).Methods("POST")
	router.HandleFunc("/book", controllers.GetAllBooks).Methods("GET")
	router.HandleFunc("/book/{bookId}", controllers.GetBookById).Methods("GET")
	router.HandleFunc("/book/{bookId}", controllers.UpdateBook).Methods("PUT")
	router.HandleFunc("/book/{bookId}", controllers.DeleteBook).Methods("DELETE")
}
