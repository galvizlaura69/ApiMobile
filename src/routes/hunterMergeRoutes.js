import express from "express";
import { getHuntersMerge } from "../controllers/hunterMergeController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: huntersMerge
 *   description: Servicios para los personajes de Hunter x Hunter
 */

/**
 * @swagger
 * /api/huntersMerge:
 *   get:
 *     summary: Obtiene hunters combinando Mongo y Postgres
 *     tags: [huntersMerge]
 *     responses:
 *       200:
 *         description: Lista combinada
 *       500:
 *         description: Error interno
 */
router.get("/", getHuntersMerge);

export default router;
