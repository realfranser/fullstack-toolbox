package models

type User struct {
	First_name			*string		`json:"first_name" validate:"required, min=2, max=100"`
	Last_name				*string		`json:"last_name" validate:"required, min=2, max=100"`
	Password				*string		`json:"password" validate:"required, min=6, max=100"`
	Email						*string		`json:"email" validate:"email, required"`
	Phone						*string		`json:"phone" validate:"required"`
	Token						*string		`json:"token"`
	User_type				*string		`json:"user_type" validate:"required, eq=admin|eq=user"`
	Refresh_token		*string		`json:"refresh_token"`
}
