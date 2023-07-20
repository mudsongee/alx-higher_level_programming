-- cities by states
SELECT c.id, c.name, s.name FROM cities c
LEFT JOIN states s
ON s.id = c.state_id
ORDER BY c.id ASC;

