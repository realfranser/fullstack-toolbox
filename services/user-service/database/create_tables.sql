USE user_service;

CREATE TABLE `users`
(
	id INT AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	nickname VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	phone VARCHAR(30) NOT NULL,
	token VARCHAR(100),
	user_type VARCHAR(10) NOT NULL,
	refresh_token VARCHAR(100),
	user_id VARCHAR(100),
	-- Properties
	PRIMARY KEY(id)
);
