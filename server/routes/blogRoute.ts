import { Router } from "express";
import { BlogController } from "../controller/blogController";

const router: Router = Router();

router
    .route('/blog')
    .get(BlogController.BlogTimeLine);

export default router;