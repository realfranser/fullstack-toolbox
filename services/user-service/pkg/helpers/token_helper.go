package helpers

import (
	"context"
	"log"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/config"
	"github.com/realfranser/fullstack-toolbox/back/user-service/pkg/models"
)

type SignedDetails struct {
	Email 			string
	First_name 	string
	Last_name 	string
	Nickname		string
	User_type		string
	User_id			string
	jwt.StandardClaims
}

var SECRET_KEY string = config.SecretKey

func GenerateAllTokens(email string,
												firstName string,
												lastName string,
												nickname string,
												userType string,
												userId string) (signedToken string, signedRefreshToken string, err error){
	claims := &SignedDetails{
		Email: email,
		First_name: firstName,
		Last_name: lastName,
		Nickname: nickname,
		User_type: userType,
		User_id: userId,
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
	if err != nil {
		log.Panic(err)
		return
	}
	refreshToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims).SignedString([]byte(SECRET_KEY))
	if err != nil {
		log.Panic(err)
		return
	}

	return token, refreshToken, err
}

func UpdateAllTokens(signedToken string, signedRefreshToken string, userId string) {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	updateUser, db := models.GetUserByHexId(userId, ctx)
	defer cancel()
	if db.Error != nil {
		log.Panic(db.Error.Error())
		return
	}

	updateUser.Token = &signedToken
	updateUser.Refresh_token = &signedRefreshToken
	db.Save(&updateUser).WithContext(ctx)
	defer cancel()
}

func ValidateToken(signedToken string) (claims *SignedDetails, msg string){
	token, err := jwt.ParseWithClaims(
		signedToken,
		&SignedDetails{},
		func(token *jwt.Token)(interface{}, error){
			return []byte(SECRET_KEY), nil
		},
	)
	if err != nil {
		msg = err.Error()
		return
	}
	/* WARNING: msg = err.Error() might not be ok */
	claims, ok := token.Claims.(*SignedDetails)
	if !ok {
		msg = "the token is invalid"
		return
	}
	/* WARNING: msg = err.Error() might not be ok */
	if claims.ExpiresAt < time.Now().Local().Unix(){
		msg = "token is expired"
		return
	}

	return claims, msg
}