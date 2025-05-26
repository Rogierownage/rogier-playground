select INSERT('Hello there', 7, 2, 'wh'); -- Result: "Hello where"
select INSERT(email, 11, -1, '...') from users; -- Truncates the email to 10 length and puts periods after.
select email, name, INSERT(email, '5', '0', name) from users; -- Takes the email, but puts the name inside it, without deleting anything. (Starts at character 5, so it comes after character 4)