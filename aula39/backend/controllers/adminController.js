const db = require('../database');

exports.getAllAdmins = (req, res) => {
  const sql = 'SELECT * FROM admin';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Success', data: rows });
  });
};

exports.createAdmin = (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO admin (name, email, password) VALUES (?, ?, ?)';
  const params = [name, email, password];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({
      message: 'Admin created',
      data: { id: this.lastID, name, email }
    });
  });
};
