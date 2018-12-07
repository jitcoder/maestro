use sales

select 
  p.name, 
  i.name, 
  o.price_paid, 
  o.address 
from
  orders o
  inner join persons p on o.fk_salesperson = p.id
  inner join inventory i on o.fk_itemid = i.id


