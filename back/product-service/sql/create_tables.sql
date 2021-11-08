CREATE TABLE `books`
(
	id INT AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	author VARCHAR(30) NOT NULL,
	stock INT NOT NULL,
	-- Properties
	PRIMARY KEY(id)
)