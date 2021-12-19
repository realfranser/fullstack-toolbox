package routes

import (
	"github.com/gorilla/mux"
	v1 "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/routes/v1"
)

var RegisterV1Routes = func(router *mux.Router) {
	v1.RegisterUserRoutes(router)
}
