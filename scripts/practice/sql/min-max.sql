select min(id) from users;
select max(year(created_at)) from users;
select min(id), gender from users group by gender; -- Gives the lowest ID for each gender
select max(name), gender from users group by gender; -- Gives the last name, alphabetically, for each gender