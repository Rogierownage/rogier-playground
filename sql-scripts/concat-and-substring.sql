select CONCAT(
    SUBSTRING(name, 1, 5),
    ' - ',
    email,
    '.'
) from users -- Takes the first 5 characters of the name, then a dash, then the email. then a period.

select CONCAT(SUBSTRING(email, 1, 10), '...') from users -- Truncates the email to 10 length and puts periods after.