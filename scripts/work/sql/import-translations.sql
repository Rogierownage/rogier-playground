-- Unlike the PHP script, this handles encoding fine.

SELECT LANG_NL.namespace AS Namespace, LANG_NL.group AS Groep, LANG_NL.name AS Naam, LANG_NL.value AS Nederlands, LANG_EN.value AS Engels
  FROM way2translate_translations LANG_NL
 INNER JOIN way2translate_translations LANG_EN ON LANG_NL.namespace = LANG_EN.namespace AND LANG_NL.group = LANG_EN.group AND LANG_NL.name = LANG_EN.name AND LANG_EN.locale = 'en'
 WHERE LANG_NL.locale = 'nl'
 ORDER BY LANG_NL.namespace, LANG_NL.group, LANG_NL.name