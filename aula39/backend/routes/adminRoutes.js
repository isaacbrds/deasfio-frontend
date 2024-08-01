const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

/**
 * @swagger
 * /api/admins:
 *   get:
 *     description: Get all admins
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', adminController.getAllAdmins);

/**
 * @swagger
 * /api/admins:
 *   post:
 *     description: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 */
router.post('/', adminController.createAdmin);

module.exports = router;
