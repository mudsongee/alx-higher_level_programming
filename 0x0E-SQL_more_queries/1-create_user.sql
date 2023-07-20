-- Script that creates the MySQL server user user_0d_1
-- Should have all privileges, pass should be set to user_0d_1_pwd
-- If user already exists, script should not fail
CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON * . * TO 'user_0d_1'@'localhost';
FLUSH PRIVILEGES;
