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
 * components:
 *   schemas:
 *     Hunter:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID generado por MongoDB
 *         nombre:
 *           type: string
 *           description: Nombre del hunter
 *         edad:
 *           type: number
 *           description: Edad del hunter
 *         altura_cm:
 *           type: number
 *           description: Altura en centímetros
 *         peso_kg:
 *           type: number
 *           description: Peso en kilogramos
 *         imagen:
 *           type: string
 *           description: URL de la imagen
 *         habilidad:
 *           type: string
 *           description: Habilidad especial del hunter
 *         tipoNen:
 *           type: string
 *           description: Tipo de Nen
 *       required:
 *         - nombre
 *         - edad
 *         - altura_cm
 *         - peso_kg
 *         - imagen
 *         - habilidad
 *         - tipoNen
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hunter'
 *     responses:
 *       201:
 *         description: Hunter creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hunter'
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createHunter);

/**
 * @swagger
 * /api/hunters/{nombre}:
 *   put:
 *     summary: Actualiza un hunter por ID
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del hunter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hunter'
 *     responses:
 *       200:
 *         description: Hunter actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hunter'
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:nombre", updateHunter);

/**
 * @swagger
 * /api/hunters/{nombre}:
 *   delete:
 *     summary: Elimina un hunter por nombre
 *     tags: [Hunters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description:  el hunter ha sido eliminado
 *     responses:
 *       200:
 *         description: Hunter eliminado correctamente
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:nombre", deleteHunter);

export default router;
