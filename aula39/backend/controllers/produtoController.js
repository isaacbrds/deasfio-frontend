const db = require('../database');

exports.getAllProdutos = (req, res) => {
  const sql = 'SELECT * FROM produtos';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Success', data: rows });
  });
};

exports.getProdutoById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM produtos WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Success', data: row });
  });
};

exports.createProduto = (req, res) => {
  const { name, description, value, purchase_date } = req.body;
  const sql = 'INSERT INTO produtos (name, description, value, purchase_date) VALUES (?, ?, ?, ?)';
  const params = [name, description, value, purchase_date];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({
      message: 'Product created',
      data: { id: this.lastID, name, description, value, purchase_date }
    });
  });
};

exports.updateProduto = (req, res) => {
  const { id } = req.params;
  const { name, description, value, purchase_date } = req.body;
  const sql = 'UPDATE produtos SET name = ?, description = ?, value = ?, purchase_date = ? WHERE id = ?';
  const params = [name, description, value, purchase_date, id];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Product updated',
      data: { id, name, description, value, purchase_date }
    });
  });
};

exports.deleteProduto = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM produtos WHERE id = ?';
  db.run(sql, id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Product deleted', data: { id } });
  });
};
