import express, { Router } from 'express';
import homeRoute from './homeRoute';
import errorRoute from './errorRoute';
import blogRoute from './blogRoute';
import contactRoute from './contactRoute';

const router: Router = express.Router();

router.use('/', homeRoute);
router.use('/blog', blogRoute); 
router.use('/contact',contactRoute);
router.use('/error',errorRoute);

export default router;
