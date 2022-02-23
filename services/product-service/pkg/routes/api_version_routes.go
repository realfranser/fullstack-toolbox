package routes

import (
	"github.com/gorilla/mux"
)

var RegisterV1Routes = func(router *mux.Router){
	RegisterBookRoutes(router)
	RegisterProductRoutes(router)
}
