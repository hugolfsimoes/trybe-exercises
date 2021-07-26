SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id;
SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id WHERE b.international_sales > b.domestic_sales;
SELECT m.title, b.rating FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id ORDER BY b.rating DESC; 
SELECT t.id, t.`name`, t.location, m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id FROM Pixar.Theater AS t LEFT JOIN Pixar.Movies AS m ON m.theater_id = t.id ORDER BY t.name;
SELECT t.id, t.`name`, t.location, m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id FROM Pixar.Theater AS t RIGHT JOIN Pixar.Movies AS m ON t.id = m.theater_id ORDER BY t.name;
SELECT title FROM Pixar.Movies WHERE id IN(SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);
SELECT m.title FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON m.id - b.movie_id WHERE b.rating > 7.5;
SELECT rating FROM Pixar.BoxOffice WHERE movie_id IN(SELECT id FROM Pixar.Movies WHERE `year` > 2009); 
SELECT b.rating FROM Pixar.BoxOffice AS b INNER JOIN Pixar.Movies AS m ON b.movie_id = m.id WHERE m.`year` > 2009;
SELECT t.name, t.location FROM Pixar.Theater AS t WHERE EXISTS( SELECT * FROM Movies WHERE Movies.theater_id = t.id);
SELECT t.name, t.location FROM Pixar.Theater AS t WHERE NOT EXISTS( SELECT * FROM Movies WHERE Movies.theater_id = t.id);
SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id WHERE b.rating > 8 AND m.theater_id IS NOT NULL;
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes FROM Pixar.Movies AS t1, Pixar.Movies AS t2 WHERE t1.director = t2.director AND t1.title <> t2.title;
SELECT m.title FROM Pixar.Movies AS m WHERE m.id IN (SELECT  b.movie_id FROM Pixar.BoxOffice AS b WHERE b.international_sales >= 500000000) AND m.length_minutes > 110;
SELECT m.title FROM Pixar.Movies AS m INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id WHERE b.international_sales >= 500000000 AND m.length_minutes > 110;