package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/controllers"
)

var RegisterAuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/auth/signup", controllers.Signup).Methods("POST")
	router.HandleFunc("/auth/login", controllers.Login).Methods("POST")
}
