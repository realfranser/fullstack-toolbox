package controllers

import (
	"context"
	"net/http"
	"strconv"
	"time"

	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

func Signup(w http.ResponseWriter, r *http.Request) {
	var signupUser = &models.User{}
	var signupResponse = &models.SignupResponse{}
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
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	newUser, db := models.GetUserById(user.ID, ctx)
	newUser.User_id = strconv.FormatUint(uint64(newUser.ID), 16)
	/* Token generation */
	token, refreshToken, _ := helper.GenerateAllTokens(
		*newUser.Email,
		*newUser.First_name,
		*newUser.Last_name,
		*newUser.Nickname,
		*newUser.User_type,
		newUser.User_id,
	)
	newUser.Token = &token
	newUser.Refresh_token = &refreshToken
	/* Update user_id and tokens */
	db.Save(&newUser)
	defer cancel()

	signupResponse.User_id = newUser.User_id
	helper.RespondWithJSON(w, http.StatusCreated, signupResponse)
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
	token, refreshToken, _ := helper.GenerateAllTokens(*userDetails.Email,
																											*userDetails.First_name,
																											*userDetails.Last_name,
																											*userDetails.Nickname,
																											*userDetails.User_type,
																											userDetails.User_id)

	helper.UpdateAllTokens(token, refreshToken, userDetails.User_id)
	userFound, db := models.GetUserByHexId(user.User_id)
	if db.Error != nil {
		helper.RespondWithError(w, http.StatusInternalServerError, db.Error.Error())
		return
	}
	helper.RespondWithJSON(w, http.StatusAccepted, userFound)
}
