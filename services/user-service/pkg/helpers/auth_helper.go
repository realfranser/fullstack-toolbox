package helpers

import (
	"errors"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

func CheckUserType(r *http.Request, role string) (err error) {
	userType := r.Header.Get("user_type")

	err = nil
	if userType != role {
		err = errors.New("unauthorized to access this resource")
		return err
	}
	return err
}

func MatchUserTypeToUid(r *http.Request, userId string) (err error) {
	uid := r.Header.Get("uid")
	userType := r.Header.Get("user_type")

	err = nil
	if userType == "user" && uid != userId {
		err = errors.New("unauthorized to access this resource")
		return err
	}
	return err
}

func HashPassword(password string) string{
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(hashedPassword)
}

func VerifyPassword(userPassword string, providedPassword string) (bool, string){
	check := true
	msg := ""

	if err := bcrypt.CompareHashAndPassword([]byte(providedPassword), []byte(userPassword)); err != nil {
		check = false
		msg = "email or password is incorrect"
	}

	return check, msg
}
