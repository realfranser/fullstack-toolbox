package models

import (
	"context"
	"time"

	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/config"
	"gorm.io/gorm"
)

var userDB *gorm.DB

type User struct {
	gorm.Model
	First_name			*string		`json:"first_name" validate:"required, min=2, max=100"`
	Last_name				*string		`json:"last_name" validate:"required, min=2, max=100"`
	Password				*string		`json:"password" validate:"required, min=6, max=100"`
	Email						*string		`json:"email" validate:"email, required"`
	Phone						*string		`json:"phone" validate:"required"`
	Token						*string		`json:"token"`
	User_type				*string		`json:"user_type" validate:"required, eq=admin|eq=user"`
	Refresh_token		*string		`json:"refresh_token"`
	User_id					string		`json:"user_id"`
}

type UserList struct {
	Items 	[]User	`json:"items"`
}

func init() {
	config.Connect()
	userDB = config.GetDB()
	userDB.AutoMigrate(&User{})
}

func GetAllUsers() []User {
	var Users []User
	userDB.Find(&Users)
	return Users
}

func GetUserById(Id int64) (*User, *gorm.DB){
	var getUser User
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDB := userDB.WithContext(ctx).Where("ID=?", Id).Find(&getUser)
	defer cancel()
	return &getUser, userDB
}

func (u *User) CreateUser() *User {
	userDB.Create(&u)
	return u
}

func (u *User) CheckPhoneEmail() (bool){
	var existsUser User
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	userDB := userDB.WithContext(ctx).Where("email=? OR phone=?", u.Email, u.Phone).Limit(1).Find(&existsUser)
	defer cancel()
	return userDB.RowsAffected > 0
}
