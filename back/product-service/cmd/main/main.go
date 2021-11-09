package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/routes"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	http.Handle("/", r)

	srv := &http.Server{
		Handler: r,
		Addr: 	fmt.Sprintf("localhost:%d", config.ServicePort),
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	fmt.Printf("Server running at port %s\n", srv.Addr)
	log.Fatal(srv.ListenAndServe())
}
