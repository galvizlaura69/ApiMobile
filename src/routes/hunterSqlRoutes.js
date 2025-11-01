import express from "express";
import {
  getAllHuntersSql,
  getHunterSqlByName,
  createHunterSql,
  updateHunterSql,
  deleteHunterSql,
} from "../controllers/hunterSqlController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: HuntersSQL
 *   description: Servicios con datos desde PostgreSQL (Supabase)
 */

/**
 * @swagger
 * /api/hunters-sql:
 *   get:
 *     summary: Obtiene todos los hunters desde Supabase
 *     tags: [HuntersSQL]
 *     responses:
 *       200:
 *         description: Lista de hunters SQL
 *       404:
 *         description: No hay hunters registrados en SQL
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAllHuntersSql);

/**
 * @swagger
 * /api/hunters-sql/{name}:
 *   get:
 *     summary: Obtiene un hunter por nombre desde SQL
 *     tags: [HuntersSQL]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del hunter
 *     responses:
 *       200:
 *         description: Hunter encontrado
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:name", getHunterSqlByName);

/**
 * @swagger
 * /api/hunters-sql:
 *   post:
 *     summary: Crea un nuevo hunter en SQL
 *     tags: [HuntersSQL]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - edad
 *               - altura_cm
 *               - peso_kg
 *               - imagen
 *               - habilidad
 *               - tiponen
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *               altura_cm:
 *                 type: number
 *               peso_kg:
 *                 type: number
 *               imagen:
 *                 type: string
 *               habilidad:
 *                 type: string
 *               tiponen:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hunter creado correctamente
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createHunterSql);

/**
 * @swagger
 * /api/hunters-sql/{id}:
 *   put:
 *     summary: Actualiza un hunter por ID
 *     tags: [HuntersSQL]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del hunter a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *               altura_cm:
 *                 type: number
 *               peso_kg:
 *                 type: number
 *               imagen:
 *                 type: string
 *               habilidad:
 *                 type: string
 *               tiponen:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hunter actualizado correctamente
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateHunterSql);

/**
 * @swagger
 * /api/hunters-sql/{id}:
 *   delete:
 *     summary: Elimina un hunter por ID
 *     tags: [HuntersSQL]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del hunter a eliminar
 *     responses:
 *       200:
 *         description: Hunter eliminado correctamente
 *       404:
 *         description: Hunter no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteHunterSql);

export default router;
