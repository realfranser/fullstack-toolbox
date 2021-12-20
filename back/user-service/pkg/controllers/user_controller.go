package controllers

import (
	"context"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/interfaces"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	/* Param parsing and processing */
	if err := helper.CheckUserType(r, "admin"); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	var usersRequest = &interfaces.GetUsersRequest{}
	helper.ParseBody(r, usersRequest)
	offset, pageSize := helper.Paginate(&usersRequest.Pagination)
	getUsers := models.GetAllUsers(offset, pageSize)

	var userList interfaces.UserList
	userList.Items = getUsers
	helper.RespondWithJSON(w, http.StatusOK, userList)
}

func GetUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["userId"]
	ID, err := strconv.ParseInt(userId, 0, 0)
	if err != nil {
		helper.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	if err := helper.MatchUserTypeToUid(r, userId); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDatails, _ := models.GetUserById(uint(ID), ctx)
	defer cancel()
	helper.RespondWithJSON(w, http.StatusOK, userDatails)
}
