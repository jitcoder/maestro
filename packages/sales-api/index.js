const express = require('express');
const sql = require('mssql');
const mongoRoutes = require('./mongoroutes');

const app = express();



app.get('/inventory', async (req, res) => {
  await sql.connect('mssql://sa:YouShallNotPass1!@localhost/sales');
  const results = await sql.query`select * from inventory`;
  res.send(results);
})

app.use('/mongo', mongoRoutes);

app.listen(3001);