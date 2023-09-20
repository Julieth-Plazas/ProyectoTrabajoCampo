import express from "express";
import { saveNotice, getNotice, getNotices } from "../controller/noticeController.js";

const router = express.Router();
router.get("/", getNotices);
router.get("/:id", getNotice);
router.post("/", saveNotice);
export default router;