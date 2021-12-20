package controllers

import (
	"context"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	/* Param parsing and processing */
	if err := helper.CheckUserType(r, "admin"); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	var usersRequest = &models.GetUsersRequest{}
	helper.ParseBody(r, usersRequest)
	offset, pageSize := helper.Paginate(&usersRequest.Pagination)
	getUsers := models.GetAllUsers(offset, pageSize)

	var userList models.UserList
	userList.Items = getUsers
	helper.RespondWithJSON(w, http.StatusOK, userList)
}

func GetUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["userId"]

	if err := helper.MatchUserTypeToUid(r, userId); err != nil {
		helper.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDatails, _ := models.GetUserByHexId(userId, ctx)
	defer cancel()
	helper.RespondWithJSON(w, http.StatusOK, userDatails)
}
