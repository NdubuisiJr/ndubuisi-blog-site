import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { HtmlHelper } from "../utils/htmlHelper";
import { Blog } from '../../src/pages/blog';

export class BlogController {
    public static async BlogTimeLine(req:Request, res:Response, next:NextFunction): Promise<Response<string,Record<string,any>>|void> {
        try {
            let blogPage:string = await HtmlHelper.InsertComponent(Blog);
            blogPage = HtmlHelper.InsertTitle(blogPage, "Blog");
            blogPage = HtmlHelper.InsertDescription(blogPage,
                `This is a complete timeline of blog posts published by Ndubuisi Jr Chukuigwe. 
                Many of which are best practices, fixes, cheats, and hacks employed to solve everyday
                programming challanges.`
            );
            return res.status(200).send(blogPage);
        } catch (error) {
           return next(error);
        }
    }
}