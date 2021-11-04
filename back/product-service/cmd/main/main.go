package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/routes"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterBookRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:18002", r))
}
