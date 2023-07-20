-- cities of california exercise
SELECT c.id, c.name FROM cities c, states s
WHERE c.id = (SELECT id FROM states WHERE name = 'California')
GROUP BY c.id ORDER BY c.id ASC;

