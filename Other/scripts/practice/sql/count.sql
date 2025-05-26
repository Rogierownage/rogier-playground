select count(*) from users; -- Counts all the users;
select count(image_filename) from users; -- Counts all the users where image_filename is not NULL. Equivalent to: select count(*) from users where image_filename is not null
select count(distinct name) from users; -- Counts the amount of unique names.
select count(*), count(distinct gender), count(distinct status) from users;  -- Counts the total amount of rows, the distinct genders (probably 2), and the distinct statuses.
SELECT gender, count(*) FROM users group by gender; -- Shows a count of users per gender