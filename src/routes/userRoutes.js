import express from "express";
import { getAllUsers, createUser } from "../controllers/usersController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Servicios para traer los usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de usuario
 *         lastName:
 *           type: string
 *           description: apellido de usuario
 *         edad:
 *           type: string
 *           description: Hora registro
 *       required:
 *         - name
 *         - lastName
 *         - date
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 *       404:
 *         description: No hay usuarios registrados
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAllUsers);


/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuarios
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createUser);


export default router;
