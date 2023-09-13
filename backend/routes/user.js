import express from 'express'
import { getUsers, asignCurso, getUser, savePost } from '../controller/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/asignarCurso', asignCurso)
router.get('/:id', getUser)
router.post('/savePost', savePost)

export default router