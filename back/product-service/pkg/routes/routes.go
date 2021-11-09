package routes

import (
	"github.com/gorilla/mux"
)

var RegisterRoutes = func(router *mux.Router){
	RegisterBookRoutes(router)
	RegisterProductRoutes(router)
}
