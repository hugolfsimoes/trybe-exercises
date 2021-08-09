USE BeeMovie;

DELIMITER $$
CREATE TRIGGER DeleteTriggerEnviaRegistroDeDeletado
	BEFORE DELETE ON movies
	FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;