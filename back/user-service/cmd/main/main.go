package main

import (
	"os"

	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "18003"
	}

	router := gin.New()
	router.Use(gin.Logger())

	routes.AuthRoutes(router)	
	routes.UserRoutes(router)

	router.GET("/api/v1", func(c *gin.Context){
		c.JSON(200, gin.H{"success":"Access granted for api v1"})
	})

	router.GET("/api/v1", func(c *gin.Context){
		c.JSON(200, gin.H{"success":"Access granted for api v2"})
	})

	router.Run(":" + port)
}
