package main

import (
	"flag"
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
	flag.Parse()
	r := mux.NewRouter()
	/* Check that request starts with /api */
	api := r.PathPrefix("/api").Subrouter()
  api.NotFoundHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusNotFound)
  })
	/* handle v1 routes */
	apiV1 := api.PathPrefix("/v1").Subrouter()
  apiV1.NotFoundHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusNotFound)
  })
	routes.RegisterV1Routes(apiV1)

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
