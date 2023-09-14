import express from 'express'
import { getUsers, asignCurso, getUser } from '../controller/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/asignarCurso', asignCurso)
router.get('/:id', getUser)


export default router