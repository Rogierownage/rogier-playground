select SUBSTRING(name, 1, 5) from users; -- The first 5 characters of the name.
select SUBSTRING(email, -3, 3) from users; -- The last 3 characters of the email.
select SUBSTRING(email, -4, 2) from users; -- Counts backwards to the 4th last character, then counts forward for 2 characters. For example, for "rogier@paqt.com" this becomes ".c".