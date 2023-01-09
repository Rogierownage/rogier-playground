select email, REPLACE(email, '@way2web.nl', '@paqt.com') as paqt_email, REPLACE(email, '@paqt.com', '@way2web.nl') as way2web_email from users;
select REPLACE(name, ' ', '_') from users;

select name, REPLACE(
    REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(
                    name,
                'a', 'y'),
            'i', 'y'),
        'u', 'y'),
    'e','y'),
'o', 'y') as stupidity from users; -- This stupid query replaces all the vowels in the name with a 'y'.