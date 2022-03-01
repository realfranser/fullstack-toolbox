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
	id INT,
	name VARCHAR(30) NOT NULL,
	category VARCHAR(30) NOT NULL,
	price DECIMAL NOT NULL,
	stock INT NOT NULL,
	description VARCHAR(100),
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP,
	-- Properties
	PRIMARY KEY(id)
);
