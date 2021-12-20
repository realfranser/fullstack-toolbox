package models

type SignupResponse struct {
	User_id	string	`json:"user_id"`
}

/* TODO: accept email and nickname */
type LoginRequest struct {
	Email			string	`json:"email"`
	Password	string	`json:"password"`
}
