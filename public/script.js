if (document.getElementById('menu')) {
  fetch('/api/menu')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('menu');
      data.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${c.id}: ${c.name}</strong> - $${c.price}<br>
          <em>Ingredients:</em> ${c.ingredients}
        `;
        list.appendChild(li);
      });
    });

  document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    const cocktailId = e.target.cocktailId.value;
    const customerName = e.target.customerName.value;

    fetch('/api/menu/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cocktailId, customerName })
    })
      .then(res => res.json())
      .then(order => alert(`Order placed! ID: ${order.id}`));
  });
}

if (document.getElementById('orders')) {
  fetch('/api/orders')
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById('orders');
      table.innerHTML = "<tr><th>ID</th><th>Cocktail</th><th>Customer</th><th>Status</th><th>Action</th></tr>";
      data.forEach(o => {
        const row = table.insertRow();
        row.innerHTML = `
          <td>${o.id}</td>
          <td>${o.cocktail}</td>
          <td>${o.customerName}</td>
          <td>${o.status}</td>
          <td>${o.status === "Pending" ? `<button onclick="markPrepared(${o.id})">Mark Prepared</button>` : ""}</td>
        `;
      });
    });
}

function markPrepared(id) {
  fetch(`/api/orders/${id}`, { method: 'PUT' })
    .then(res => res.json())
    .then(() => location.reload());
}
