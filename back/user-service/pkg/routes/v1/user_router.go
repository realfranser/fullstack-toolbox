package routes

import (
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/controllers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/middleware"
)

var RegisterUserRoutes = func(router *mux.Router) {
	router.Use(middleware.Authenticate())
	router.HandleFunc("/users", controller.GetUsers())
	router.HandleFunc("/users/{userId}", controllers.GetUserById())
}
