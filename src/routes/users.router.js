import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/', usersController.getAllUsers);
router.get('/:uid', usersController.getUser);
router.get('/show/complete', usersController.showUsers);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);

export default router;