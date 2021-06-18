CREATE DATABASE database_links;

USE datebase_links;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(100) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

CREATE table links(
	id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL default current_timestamp,
    constraint fk_user foreign key (user_id) REFERENCES users(id)
)

ALTER TABLE users
ADD PRIMARY KEY (id):

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;

DESCRIBE users;