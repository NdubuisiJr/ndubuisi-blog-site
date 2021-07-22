
import express, { Router } from 'express';
import ContactController from '../controller/contactController';

const router: Router = express.Router();

router 
    .route('/')
    .get(ContactController.ContactInfo);

export default router;