package controllers

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	/* Param parsing and processing */
	if err := helper.CheckUserType(r, "admin"); err != nil {
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
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDatails, _ := models.GetUserById(uint(ID), ctx)
	defer cancel()
	helper.RespondWithJSON(w, http.StatusOK, userDatails)
}
