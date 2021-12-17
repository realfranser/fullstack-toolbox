package controllers

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)


func Signup(w http.ResponseWriter, r *http.Request) {
	var signupUser = &models.User{}
	if errCode, err := helper.ParseBody(r, signupUser); err != nil {
		helper.RespondWithError(w, errCode, err.Error())
		return
	}
	password := helper.HashPassword(*signupUser.Password)
	signupUser.Password = &password
	/* Check if the email or phone number are already in use */
	if signupUser.CheckPhoneEmail() {
		helper.RespondWithError(w, http.StatusConflict, "this email or phone number are alreadly in use")
		return
	}
	/* Insert user in DB */
	user := signupUser.CreateUser()
	newUser, db := models.GetUserById(user.ID)
	newUser.User_id = strconv.FormatUint(uint64(newUser.ID), 16)
	/* Token generation */
	token, refreshToken, _ := helper.GenerateAllTokens(
		*newUser.Email,
		*newUser.First_name,
		*newUser.Last_name,
		*newUser.User_type,
		newUser.User_id,
	)
	newUser.Token = &token
	newUser.Refresh_token = &refreshToken
	/* Update user_id and tokens */
	db.Save(&newUser)

	helper.RespondWithJSON(w, http.StatusCreated, newUser)
}

func Login(w http.ResponseWriter, r *http.Request) {
	var user models.User

	if errCode, err := helper.ParseBody(r, user); err != nil {
		helper.RespondWithError(w, errCode, err.Error())
		return
	}

	userDetails, db := models.GetUserByEmail(*user.Email)
	if db.Error != nil {
		helper.RespondWithError(w,  http.StatusUnauthorized, db.Error.Error())
		return
	}

	if passwordIsValid, msg := helper.VerifyPassword(*user.Password, *userDetails.Password); !passwordIsValid {
		helper.RespondWithError(w, http.StatusUnauthorized, msg)
		return
	}

	if userDetails.Email == nil {
		helper.RespondWithError(w, http.StatusNotFound, "user not found")
		return
	}
	token, refreshToken, _ := helper.GenerateAllTokens(*userDetails.Email, *userDetails.First_name, *userDetails.Last_name, *userDetails.User_type, userDetails.User_id)
	helper.UpdateAllTokens(token, refreshToken, userDetails.User_id)
	userFound, db := models.GetUserByHexId(user.User_id)
	if db.Error != nil {
		helper.RespondWithError(w, http.StatusInternalServerError, db.Error.Error())
		return
	}

	helper.RespondWithJSON(w, http.StatusAccepted, userFound)
}

func GetUsers(w http.ResponseWriter, r *http.Request) {
	/* Param parsing and processing */
	if err := helper.CheckUserType(r, "ADMIN"); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
	}
	offset, pageSize := helper.Paginate(r)
	getUsers := models.GetAllUsers(offset, pageSize)

	var userList models.UserList
	userList.Items = getUsers
	helper.RespondWithJSON(w, http.StatusOK, userList)
}

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
	userDatails, _ := models.GetUserById(uint(ID))
	helper.RespondWithJSON(w, http.StatusOK, userDatails)
}
