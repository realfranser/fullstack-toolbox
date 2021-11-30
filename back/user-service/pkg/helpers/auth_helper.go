package helpers

import (
	"errors"
	"net/http"

	"github.com/gorilla/mux"
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
	vars := mux.Vars(r)
	userType := vars["user_type"]
	uid := vars["uid"]
	err = nil

	if userType == "USER" && uid != userId {
		err = errors.New("unauthorized to access this resource")
		return err
	}
	err = CheckUserType(r, userType)
	return err
}
