SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON fa.film_id = f.film_id
ORDER BY actor