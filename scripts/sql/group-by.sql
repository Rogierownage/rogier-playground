SELECT gender, count(*) FROM `users` group by gender; -- Shows a count of users per gender
SELECT count(*), project_id FROM `buyer_teams` group by project_id; -- Count the buyer teams for each project
SELECT answerer_user_id, count(*) FROM `q_and_a` group by answerer_user_id  -- Count the questions answered by each user
SELECT gender, status, count(*) FROM `users` group by gender, status; -- Counts every combination of gender and status.
SELECT gender, status, year(created_at), count(*) FROM `users` group by gender, status, year(created_at); -- Counts every combination of gender, status, and creation year  