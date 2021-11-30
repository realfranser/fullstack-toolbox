package controllers

import (
	"fmt"
	"net/http"
	"strconv"

	validator "github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

var NewUser models.User
var validate = validator.New()

func HashPassword()

func VerifyPassword()

func Signup(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	validationErr := validate.Struct(NewUser)

}

func Login()

func GetUsers()

func GetUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["userId"]
	ID, err := strconv.ParseInt(userId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}

	if err := helper.MatchUserTypeToUid(r, userId); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
	}

	userDatails, _ := models.GetUserById(ID)

	helper.RespondWithJSON(w, http.StatusOK, userDatails)
}
