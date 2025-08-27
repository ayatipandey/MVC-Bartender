const cocktails = require('../models/cocktail');
const { Order, orders } = require('../models/order');


exports.getMenu = (req, res) => {
  res.json(cocktails);
};

exports.createOrder = (req, res) => {
  const { cocktailId, customerName } = req.body;
  if (!cocktailId || !customerName) {
    return res.status(400).json({ error: "Missing cocktailId or customerName" });
  }

  const newOrder = new Order(orders.length + 1, parseInt(cocktailId), customerName);
  orders.push(newOrder);
  res.status(201).json(newOrder);
};