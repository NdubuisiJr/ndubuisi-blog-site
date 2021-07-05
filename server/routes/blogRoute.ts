import { Router } from "express";
import { BlogController } from "../controller/blogController";

const router: Router = Router();

router
    .route('/')
    .get(BlogController.BlogTimeLine);

export default router;