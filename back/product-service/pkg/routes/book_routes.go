package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/controllers"
)

var RegisterBookRoutes = func(router *mux.Router){
	router.HandleFunc("/book/", controllers.CreateBook)
}
