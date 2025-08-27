const cocktails = require('../models/cocktail');
const { orders } = require('../models/order');

exports.getOrders = (req, res) => {
  const orderList = orders.map(o => ({
    id: o.id,
    cocktail: cocktails.find(c => c.id === o.cocktailId).name,
    customerName: o.customerName,
    status: o.status
  }));
  res.json(orderList);
};


exports.markPrepared = (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  order.status = "Prepared";
  res.json(order);
};
