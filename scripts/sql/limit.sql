select * from users limit 10; -- Selects 10 users (Using arbitrary, default sorting)
select * from users order by id limit 10; -- Selects the 10 users with the lowest IDs.
select * from users order by name desc limit 5; -- Selects the 5 users that come latest in the alphabet.
select * from users where year(created_at) = 2022 order by created_at desc limit 15; -- Out of the users that were created in 2022, get the 15 most recently created.