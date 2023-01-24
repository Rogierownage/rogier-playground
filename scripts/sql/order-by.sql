select * from users order by name;
select * from users order by gender desc; 
select name from users order by id asc; -- This works even though id is not selected.
select name, created_at from users order by 2 desc; -- Orders by the second selected column, which is created_at in this case. This can even be done with select * , but it is confusing.
select name, gender, CONCAT(gender, ' ', name) as gender_name from users order by gender_name desc; -- Puts the gender and name together and sorts by that.
select name, gender, CONCAT(gender, ' ', name) as gender_name from users order by gender desc, name desc; -- Does the exact same as the previous query. Sorts by gender primarily and then name within the identical genders.
SELECT gender, year(created_at) as creation_year from users order by creation_year, gender; -- Orders by creation year first and then gender second. Order would be: 2022,female - 2022,male - 2023,female - 2023,male
select name, created_at from users order by year(created_at) desc, name; -- Puts the same creation years together (most recent first) and sorts by name within that.