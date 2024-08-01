const express = require('express');
const router = express.Router();
const productController = require('../controllers/produtoController');

/**
 * @swagger
 * /api/products:
 *   get:
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', productController.getAllProdutos);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     description: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to get
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', productController.getProdutoById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     description: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: number
 *               purchase_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Product created
 */
router.post('/', productController.createProduto);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     description: Update a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: number
 *               purchase_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Product updated
 */
router.put('/:id', productController.updateProduto);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     description: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted
 */
router.delete('/:id', productController.deleteProduto);

module.exports = router;
