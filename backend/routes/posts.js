import express  from "express";
import { savePost, getPosts, updatePost, deletePost } from "../controller/postsController.js";
const router = express.Router();

router.post("/savePost", savePost) 
router.get("/getPosts", getPosts)
router.put('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)
export default router;