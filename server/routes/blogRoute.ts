import { Router } from "express";
import { BlogController } from "../controller/blogController";

const router: Router = Router();

router
    .route('/')
    .get(BlogController.BlogTimeLine);

router
    .route('/:title')
    .get(BlogController.RenderBlog);


export default router;