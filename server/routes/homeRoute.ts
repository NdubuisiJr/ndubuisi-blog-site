import express, { Router } from 'express';
import { HomeController } from '../controller/homeController';

const router: Router = express.Router();

router
    .route('/')
    .get(HomeController.Homepage);


export default router;