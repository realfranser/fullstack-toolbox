package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/controllers"
)

var RegisterAuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/users/signup", controllers.Signup).Methods("POST")
	router.HandleFunc("/users/Login", controllers.Login).Methods("POST")
}
