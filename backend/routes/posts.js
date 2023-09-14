import express  from "express";
import { savePost, getPosts } from "../controller/postsController.js";
const router = express.Router();

router.post("/savePost", savePost) 
router.get("/getPosts", getPosts)

export default router;