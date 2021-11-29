USE product_service;

CREATE TABLE `books`
(
	id INT AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	author VARCHAR(30) NOT NULL,
	stock INT NOT NULL,
	-- Properties
	PRIMARY KEY(id)
);

CREATE TABLE `products`
(
	id INT AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	category VARCHAR(30) NOT NULL,
	price DECIMAL NOT NULL,
	stock INT NOT NULL,
	description VARCHAR(100),
	-- Properties
	PRIMARY KEY(id)
);
