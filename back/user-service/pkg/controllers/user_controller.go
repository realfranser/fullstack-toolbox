package controllers

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"

	validator "github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/utils"
	"golang.org/x/crypto/bcrypt"
)

var NewUser models.User
var validate = validator.New()

func HashPassword()

func VerifyPassword()

func Signup()

func Login()

func GetUsers()

func GetUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["userId"]
	ID, err := strconv.ParseInt()
}
