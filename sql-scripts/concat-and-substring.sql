select CONCAT(
    SUBSTRING(name, 1, 5),
    ' - ',
    email,
    '.'
) from users