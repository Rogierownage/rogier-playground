select TRIM(LEADING 'W' from name) from users;
select TRIM(BOTH ' ' from email) from users
select TRIM(TRAILING '-' from name) from users
select TRIM('   hello there ');-- Defaults to 'Both' and the space character