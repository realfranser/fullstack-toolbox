package middleware

import (
	"net/http"

	tools "github.com/realfranser/fullstack-toolbox/back/go-tools/helpers"
	helper "github.com/realfranser/fullstack-toolbox/back/user-service/pkg/helpers"
)

func Authenticate(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		/* WARNING: check if this token is extracted as expected */
		clientToken := r.Header.Get("token")
		if clientToken == "" {
			tools.RespondWithError(w, http.StatusForbidden, "No Authorization header provided")
			return
		}

		claims, err := helper.ValidateToken(clientToken)
		if err != "" {
			tools.RespondWithError(w, http.StatusForbidden, err)
			return
		}

		r.Header.Add("email", claims.Email)
		r.Header.Add("first_name", claims.First_name)
		r.Header.Add("last_name", claims.Last_name)
		r.Header.Add("uid", claims.User_id)
		r.Header.Add("user_type", claims.User_type)
		next.ServeHTTP(w, r)
	})
}
