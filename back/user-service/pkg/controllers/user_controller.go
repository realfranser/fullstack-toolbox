package controllers

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

func HashPassword()

func VerifyPassword()

func Signup(w http.ResponseWriter, r *http.Request) {
	var signupUser = &models.User{}
	if errCode, err := helper.ParseBody(r, signupUser); err != nil {
		helper.RespondWithError(w, errCode, err.Error())
		return
	}
	/* Check if the email or phone number are already in use */
	if signupUser.CheckPhoneEmail() {
		helper.RespondWithError(w, http.StatusConflict, "this email or phone number are alreadly in use")
		return
	}

	token, refreshToken, _ := helper.GenerateAllTokens(*signupUser.Email, *signupUser.First_name, *signupUser.Last_name, *signupUser.User_type)
	signupUser.Token = &token
	signupUser.Refresh_token = &refreshToken
	user := signupUser.CreateUser()

	helper.RespondWithJSON(w, http.StatusCreated, user)
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
