SELECT 
    p.name AS project_name,
    p.budget,
    COUNT(a.employee_id) AS team_members,
    SUM(a.hours_allocated) AS total_hours
FROM projects p
JOIN assignments a ON p.id = a.project_id
WHERE p.budget > 50000
GROUP BY p.id, p.name, p.budget
ORDER BY total_hours DESC;