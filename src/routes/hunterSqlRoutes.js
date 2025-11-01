import express from "express";
import { getAllHuntersSql, getHunterSqlByName } from "../controllers/hunterSqlController.js";

const router = express.Router();

router.get("/", getAllHuntersSql);
router.get("/:name", getHunterSqlByName);

export default router;
