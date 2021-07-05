import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { HtmlHelper } from "../utils/htmlHelper";
import { Blog } from '../../src/pages/blog';

export class BlogController {
    public static async BlogTimeLine(req:Request, res:Response, next:NextFunction): Promise<Response<string,Record<string,any>>|void> {
        try {
            const blogPage = HtmlHelper.InsertComponent(Blog);
            return res.status(200).send(blogPage);
        } catch (error) {
           return next(error);
        }
    }
}