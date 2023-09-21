import express from 'express'
import { getUsers, asignCurso, getUser, deleteUser, updateUser } from '../controller/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/asignarCurso', asignCurso)
router.get('/:id', getUser)
router.delete('/deleteUser/:id', deleteUser)
router.put('/updateUser/:id', updateUser)



export default router
