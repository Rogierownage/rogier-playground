-- To check the data
select count(*) as group_count, (
    select client_id from employees where id = (
        select employee_id from dossiers where id = invoices.dossier_id
    )
) as client_id, MAX(created_at) max_created_at, invoices.* from invoices 
group by dossier_id, payment_type, period_started_at, period_ended_at, declaration_month, gross_amount, fees  
having group_count > 1 and client_id = 7
ORDER BY `max_created_at` DESC

-- To get the IDs to delete
select MAX(id) from invoices 
where (
    select client_id from employees where id = (
        select employee_id from dossiers where id = invoices.dossier_id
    )
) = 7
group by dossier_id, payment_type, period_started_at, period_ended_at, declaration_month, gross_amount, fees  
having count(*) > 1 and date(MAX(created_at)) = '2023-02-06';