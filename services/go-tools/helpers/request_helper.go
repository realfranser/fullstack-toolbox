package helpers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	validator "github.com/go-playground/validator/v10"
)

var validate = validator.New()

func ParseBody(r *http.Request, x interface{}) (errCode int, err error){
	err = nil
	if body, err := ioutil.ReadAll(r.Body); err == nil {
		if err:= json.Unmarshal([]byte(body), x); err != nil {
			return http.StatusInternalServerError, err
		}
	}

	if validationErr := validate.Struct(x); validationErr != nil {
		return http.StatusBadRequest, validationErr
	}

	return http.StatusOK, err
}
