import { Router } from 'express';
import { ErrorHandler } from '../middleware/errorHandler';

const router: Router = Router();

router
    .route('/')
    .get(ErrorHandler.ErrorPageHandler());

export default router;