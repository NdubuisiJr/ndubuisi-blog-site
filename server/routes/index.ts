import express, { Router } from 'express';
import homeRoute from './homeRoute';
import errorRoute from './errorRoute';

const router: Router = express.Router();

router.use('/', homeRoute);

router.use('/error',errorRoute);

export default router;
