const express = require('express');
const app = express();
const port = 3000;
const db = require('./database');
const setupSwagger = require('./swagger');
const adminRoutes = require('./routes/adminRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Configurar o Swagger
setupSwagger(app);

// Rotas
app.use('/api/admins', adminRoutes);
app.use('/api/produtos', produtoRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.json({messagem: "Api criada no desafio", endpoints: {home :"/", admins: "/api/admins", produtos: "/api/produtos", docs: "/api-docs" }})
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
