const express = require('express'); //Express library to build a web server.
const bodyParser = require('body-parser'); //reads data sent in forms or JSON.
const menuRoutes = require('./routes/menuRoutes'); 
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(bodyParser.json());             
app.use(express.static('public'));     

app.use('/api/menu', menuRoutes);       
app.use('/api/orders', orderRoutes);    

const PORT = 3000;
app.listen(PORT, () => console.log(`Bartender app running at http://localhost:${PORT}`));