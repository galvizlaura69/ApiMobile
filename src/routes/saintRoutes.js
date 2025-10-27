import express from "express";
import { getSaintByName, getAllSaints } from "../controllers/saintController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Saints
 *   description: Servicios para los caballeros del zodiaco
 */

/**
 * @swagger
 * /api/saints:
 *   get:
 *     summary: Obtiene todos los caballeros
 *     tags: [Saints]
 *     responses:
 *       200:
 *         description: Lista de caballeros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Saint'
 *       404:
 *         description: No hay caballeros registrados
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAllSaints);

/**
 * @swagger
 * /api/saints/{name}:
 *   get:
 *     summary: Obtiene un caballero por nombre
 *     tags: [Saints]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del caballero 
 *     responses:
 *       200:
 *         description: Caballero encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Saint'
 *       404:
 *         description: Caballero no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:name", getSaintByName);

export default router;
