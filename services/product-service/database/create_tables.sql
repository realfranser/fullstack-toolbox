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
	premium TINYINT NOT NULL,
	description VARCHAR(100),
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP,
	-- Properties
	PRIMARY KEY(id)
);

CREATE TABLE `colors`
(
	id INT AUTO_INCREMENT,
	product_id INT NOT NULL,
	name VARCHAR(30) NOT NULL,
	-- Properties
	PRIMARY KEY(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE `sizes`
(
	id INT AUTO_INCREMENT,
	product_id INT NOT NULL,
	name VARCHAR(30) NOT NULL,
	-- Properties
	PRIMARY KEY(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE `stock`
(
	id INT AUTO_INCREMENT,
	product_id INT NOT NULL,
	color_id INT NOT NULL,
	size_id INT NOT NULL
	stock INT NOT NULL,
	img VARCHAR(200) NOT NULL,
	-- Properties
	PRIMARY KEY(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
	FOREIGN KEY (color_id) REFERENCES colors(id)
	FOREIGN KEY (size_id) REFERENCES sizes(id)
)
