describe weatherapp;
describe weatherdata;

SELECT City, Temperature from sys.weatherapp;
SELECT City, Temperature from sys.weatherdata;

DELETE FROM weatherapp;
DELETE FROM weatherdata;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
weatherapp
SELECT Host, User FROM mysql.user WHERE User='nonexistant';

CREATE USER 'chris'@'localhost' IDENTIFIED BY 'sekret';

Error Code: 1054. Unknown column 'Temperature' in 'field list'
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
