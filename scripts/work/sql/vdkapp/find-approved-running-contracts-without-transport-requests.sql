-- Finds contracts that are in status "approved", have an end date, and have no transport requests.
-- This can not happen anymore since the change where contracts automatically get transport requests, but there was old data where this was the case.
-- In this case, it is impossible to edit the contract, meaning there is no way to make it create the transport requests that should be there.
select * from contracts
where approved_at is not null AND closed_at is null AND cancelled_at is null
AND end_date is not null
AND (select count(transport_requests.contract_id) from transport_requests where transport_requests.contract_id = contracts.id group by transport_requests.contract_id) is null;