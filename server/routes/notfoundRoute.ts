import { Router } from 'express';
import { NotFoundHandler } from '../middleware/notfound';


const router: Router = Router();

router
    .route('/')
    .get(NotFoundHandler.Notfound());

export default router;