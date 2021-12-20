package interfaces

import (
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

type UserList struct {
	Items 	[]models.User	`json:"items"`
}

type GetUsersRequest struct {
	Pagination	Pagination	`json:"pagination"`
}
