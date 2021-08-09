CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.name FROM sakila.film AS f
INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
ORDER BY f.title