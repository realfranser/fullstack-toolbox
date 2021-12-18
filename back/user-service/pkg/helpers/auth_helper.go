package helpers

import (
	"errors"
	"net/http"

	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
)

func CheckUserType(r *http.Request, role string) (err error) {
	vars := mux.Vars(r)
	userType := vars["user_type"]
	err = nil

	if userType != role {
		err = errors.New("unauthorized to access this resource")
		return err
	}
	return nil
}

func MatchUserTypeToUid(r *http.Request, userId string) (err error) {
	/* TODO: check ctx content */
	var claims = &SignedDetails{}
	ctx := r.Context()
	ctx.Value(claims)

	uid := claims.User_id
	userType := claims.User_type
	err = nil

	if userType == "USER" && uid != userId {
		err = errors.New("unauthorized to access this resource")
		return err
	}
	err = CheckUserType(r, userType)
	return err
}

func HashPassword(password string) string{
	bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(password)
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
