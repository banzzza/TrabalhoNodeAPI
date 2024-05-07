import express from 'express';
import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

// Rotas
router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
