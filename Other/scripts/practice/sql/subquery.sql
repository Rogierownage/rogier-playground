select * from users where id = (select max(id) from users); -- Selects the row that has the highest ID. 
select * from users where id = (select max(realtor_id) from users); -- Select the user that has the highest realtor_id among users.
select name, created_at from users where created_at = (select min(created_at) from users);
select name, created_at from users where year(created_at) = (select min(year(created_at)) from users) -- Select the users with the creation year equal to the lowest creation year among users.