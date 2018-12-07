const express = require('express');

const mongoRoutes = express.Router();

const MongoClient = require('mongodb').MongoClient;

const connection = MongoClient.connect('mongodb://localhost:27017');

mongoRoutes.post('/seed', async (req, res) => {
  const client = await connection;
  const db = client.db('sales');
  const inventory = db.collection('inventory');
  const orders = db.collection('orders');
  const persons = db.collection('persons');

  inventory.insertMany([
    {name:'Juul Starter Kit', price: 34.99},
    {name: 'Fruit POD', price: 24.99},
    {name: 'Cucumber POD', price: 24.99},
    {name: 'Tobacco POD', price: 24.99},
    {name: 'Vanilla POD', price: 24.99},
    {name: 'Chocolate POD', price: 24.99},
  ]);

  persons.insertMany([
    {name: 'Bob'},
    {name: 'Sally'},
    {name: 'Chris'}
  ]);

  const fruitPodId = await inventory.findOne({name:'Fruit POD'}, {_id:1})._id;
  const salesPersonId = await persons.findOne({name: 'Bob'}, {_id:1})._id;

  orders.insertMany([
    {itemId: fruitPodId, address: '1234 Sesame St', pricePaid: 24.99, salesPersonId}
  ]);

  res.send('done');

})

mongoRoutes.get('/inventory', async (req, res) => {
  const client = await connection;
  const db = client.db('sales');
  const inventory = db.collection('inventory');

  const cursor = inventory.find({});
  const results = await cursor.toArray();
  
  res.send(results);
})
module.exports = mongoRoutes;
