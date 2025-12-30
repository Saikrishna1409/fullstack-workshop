SELECT 
    e1.name AS Employee_Name, e2.name AS Manager_Name
FROM
    employees e1
        LEFT JOIN
    employees e2 ON e1.manager_id = e2.id;
    