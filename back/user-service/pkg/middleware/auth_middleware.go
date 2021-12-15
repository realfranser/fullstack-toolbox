package middleware

import (
	"net/http"

	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
)

func Authenticate(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		/* WARNING: check if this token is extracted as expected */
		clientToken := r.Header.Get("token")
		if clientToken == "" {
			helper.RespondWithError(w, http.StatusForbidden, "No Authorization header provided")
			return
		}

		claims, err := helper.ValidateToken(clientToken)
		if err != "" {
			helper.RespondWithError(w, http.StatusForbidden, err)
			return
		}

		next.ServeHTTP(w, r)
	})
}
