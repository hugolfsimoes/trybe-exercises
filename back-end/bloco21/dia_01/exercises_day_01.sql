SELECT MAX(SALARY) FROM hr.employees;
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
SELECT JOB_ID, AVG(SALARY) AS media_salarial FROM hr.employees GROUP BY JOB_ID ORDER BY media_salarial DESC;
SELECT SUM(SALARY) FROM hr.employees;
SELECT ROUND(MAX(SALARY),2), ROUND(MIN(SALARY),2), ROUND(SUM(SALARY),2), ROUND(AVG(SALARY), 2) FROM hr.employees; 
SELECT JOB_ID , COUNT(*) FROM hr.employees WHERE JOB_ID = "IT_PROG";
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';
SELECT JOB_ID ,AVG(SALARY) FROM hr.employees WHERE JOB_ID <> 'IT_PROG' GROUP BY JOB_ID ORDER BY AVG(SALARY) DESC;
SELECT  DEPARTMENT_ID, AVG(SALARY), COUNT(*) as NUMBER_EMPLOYEES FROM hr.employees GROUP BY DEPARTMENT_ID HAVING NUMBER_EMPLOYEES > 10;
UPDATE hr.employees SET PHONE_NUMBER = replace(PHONE_NUMBER, 515, 777) WHERE PHONE_NUMBER LIKE '515%';
SELECT * FROM hr.employees WHERE LENGTH(FIRST_NAME) >= 8; 
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees; 
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees; 
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees; 
SELECT UCASE(FIRST_NAME) FROM hr.employees;
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE MONTH(HIRE_DATE) = 07 AND YEAR(HIRE_DATE) = 1987; 
SELECT FIRST_NAME, LAST_NAME, datediff(CURRENT_DATE(), HIRE_DATE) FROM hr.employees; 