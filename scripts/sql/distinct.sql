select DISTINCT year(created_at), year(updated_at) from users; -- Shows unique combinations of creation year and update year.
select DISTINCT name from users;
select DISTINCT * from users; -- Only removes records where every single row is identical. This will just return every row in most tables. (Because the ID is unique, for example)
select DISTINCT CONCAT(birthday, ' ', year(created_at)) from users;