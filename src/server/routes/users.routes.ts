
import { Router } from 'express'
const router = Router();
import {createUser , getUser , deleteUser ,getUsers , updateUser} from '../controllers/user.controller';

router.route('/')
    .post(createUser);

router.route('/:id')
    .delete(deleteUser);

router.route('/:id')
    .get(getUser);
    
router.route('/')
    .get(getUsers);

router.route('/:id')
    .put(updateUser);

export default router;