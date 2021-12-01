package helpers

import (
	"log"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/config"
)

type SignedDetails struct {
	Email 			string
	First_name 	string
	Last_name 	string
	User_type		string
	jwt.StandardClaims
}

var SECRET_KEY string = config.SecretKey

func GenerateAllTokens(email string, firstName string, lastName string, userType string) (signedToken string, signedRefreshToken string, err error){
	claims := &SignedDetails{
		Email: email,
		First_name: firstName,
		Last_name: lastName,
		User_type: userType,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Local().Add(time.Hour * time.Duration(24)).Unix(),
		},
	}

	refreshClaims := &SignedDetails{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Local().Add(time.Hour * time.Duration(168)).Unix(),
		},
	}

	token, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(SECRET_KEY))
	refreshToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims).SignedString([]byte(SECRET_KEY))

	if err != nil {
		log.Panic(err)
		return
	}

	return token, refreshToken, err
}
