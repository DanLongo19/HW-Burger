CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false, 
	PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Butterburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('BBQ Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Blue Moon Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', FALSE);