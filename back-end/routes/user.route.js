import express from 'express';
import { getAllUsers } from '../controllers/users.controller';
import { getUserById } from '../controllers/users.controller';
import { createUser } from '../controllers/users.controller';
import { updateUser } from '../controllers/users.controller';
import { deleteUser } from '../controllers/users.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);