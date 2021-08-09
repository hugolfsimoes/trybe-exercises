SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 10 / 2;
SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours As 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT Name FROM Scientists.Scientists ORDER BY Name;
SELECT NAME FROM Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto', Name, 'precisou de ', Hours, ' horas para ser concluído') as Projeto FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects ORDER BY Hours  LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5 ;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as 'Número de cientistas' FROM Scientists.Scientists;

Bônus

SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT DISTINCT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
SELECT COUNT(PiecePiece) FROM PiecesProviders.Provides WHERE Piece = '1';

