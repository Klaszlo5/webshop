import { Router } from 'express';
import { getItemsController, createOrderController } from '../controllers/itemController';

const router = Router();

router.get('/items', getItemsController);
router.post('/order', createOrderController);

export default router;