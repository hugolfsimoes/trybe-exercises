SELECT ad.address_id, ad.address, ad.district, ad.city_id, c.city FROM sakila.address AS ad
INNER JOIN sakila.city as c ON c.city_id = ad.city_id
ORDER BY c.city;