import express, { Router } from 'express';
import homeRoute from './homeRoute';

const router: Router = express.Router();

router.use('/', homeRoute);
