CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  userName CHAR(20),
  -- password with hash
  pswd CHAR(20),
  firstName CHAR(20),
  lastName CHAR(20),
  email CHAR(40),
  phone CHAR(10),
  address1 CHAR(40),
  address2 CHAR(40),
  addressCity CHAR(20),
  addressState CHAR(2),
  addressZip INT,
  cardNum BIGINT,
  cardCVV INT,
  cardExpMonth INT,
  cardExpYear INT,
  billingZip INT,
  PRIMARY KEY (id),
  UNIQUE (userName)
  -- later add other tables for cleaner storage
);

-- CREATE TABLE IF NOT EXISTS payments (
--   id INT NOT NULL AUTO_INCREMENT,
--   num INT,
--   cvv INT,
--   expmonth INT,
--   expyear INT,
  -- billingZip INT,
--   userID INT,
--   PRIMARY KEY (id),
--   FOREIGN KEY (userID) REFERENCES users(id)
-- );

-- CREATE TABLE IF NOT EXISTS addresses (
--   id INT NOT NULL AUTO_INCREMENT,
--   address1 CHAR(40),
--   address2 CHAR(40),
  -- addressCity CHAR(20),
  -- addressState CHAR(2),
  -- zip INT,
--   PRIMARY KEY (id)
-- );