class Order {
  constructor(id, cocktailId, customerName, status = 'Pending') {
    this.id = id;
    this.cocktailId = cocktailId;
    this.customerName = customerName;
    this.status = status;
  }
}
const orders = []; 
module.exports = { Order, orders };