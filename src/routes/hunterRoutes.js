import express from "express";
import {
  getAllHunters,
  getHunterByName,
  createHunter,
  updateHunter,
  deleteHunter
} from "../controllers/hunterController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Hunters
 *   description: Servicios para los personajes de Hunter x Hunter
 */

/**
 * @swagger
 * /api/hunters:
 *   get:
 *     summary: Obtiene todos los hunters
 *     tags: [Hunters]
 *     responses:
 *       200:
 *         description: Lista de hunters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hunter'
 *       404:
 *         description: No hay hunters registrados
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAllHunters);

/**
 * @swagger
 * /api/hunters/{nombre}:
 *   get:
 *     summary: Obtiene un hunter por nombre
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del hunter
 *     responses:
 *       200:
 *         description: Hunter encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hunter'
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:nombre", getHunterByName);

/**
 * @swagger
 * /api/hunters:
 *   post:
 *     summary: Crea un nuevo hunter
 *     tags: [Hunters]
 */
router.post("/", createHunter);

/**
 * @swagger
 * /api/hunters/{id}:
 *   put:
 *     summary: Actualiza un hunter por ID
 *     tags: [Hunters]
 */
router.put("/:id", updateHunter);

/**
 * @swagger
 * /api/hunters/{id}:
 *   delete:
 *     summary: Elimina un hunter por ID
 *     tags: [Hunters]
 */
router.delete("/:id", deleteHunter);

export default router;
