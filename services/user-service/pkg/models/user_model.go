package models

import (
	"context"
	"time"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/models"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/config"
	"gorm.io/gorm"
)

var userDB *gorm.DB

type User struct {
	gorm.Model
	First_name			*string		`json:"first_name" validate:"required,min=2,max=100"`
	Last_name				*string		`json:"last_name" validate:"required,min=2,max=100"`
	Nickname				*string		`json:"nickname" validate:"required,min=2,max=100"`
	Password				*string		`json:"password" validate:"required,min=6,max=100"`
	Email						*string		`json:"email" validate:"email,required"`
	Phone						*string		`json:"phone" validate:"required"`
	Token						*string		`json:"token"`
	User_type				*string		`json:"user_type" validate:"required,eq=admin|eq=user"`
	Refresh_token		*string		`json:"refresh_token"`
	User_id					string		`json:"user_id"`
}

type UserList struct {
	Items 	[]User	`json:"items"`
}

type GetUsersRequest struct {
	Pagination	tools.Pagination	`json:"pagination"`
}

func init() {
	config.Connect()
	userDB = config.GetDB()
	userDB.AutoMigrate(&User{})
}

func GetAllUsers(offset int, pageSize int) []User {
	var Users []User
	userDB.Offset(offset).Limit(pageSize).Find(&Users)
	return Users
}

func GetUserById(Id uint, ctx context.Context) (*User, *gorm.DB){
	var getUser User
	userDB := userDB.WithContext(ctx).Where("ID=?", Id).First(&getUser)
	return &getUser, userDB
}

func (u *User) CreateUser() *User {
	userDB.Create(&u)
	return u
}

/* Extra DB calls */

func (u *User) CheckPhoneEmail() (bool){
	var existsUser User
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDB := userDB.WithContext(ctx).Where("email=? OR phone=?", u.Email, u.Phone).First(&existsUser)
	defer cancel()
	return userDB.RowsAffected > 0
}

func GetUserByEmail(email string) (*User, *gorm.DB){
	var getUser User
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDB := userDB.WithContext(ctx).Where("email=?", email).First(&getUser)
	defer cancel()
	return &getUser, userDB
}

func GetUserByHexId(userID string, ctx context.Context) (*User, *gorm.DB){
	var getUser User
	userDB := userDB.WithContext(ctx).Where("user_id=?", userID).First(&getUser)
	return &getUser, userDB
}
