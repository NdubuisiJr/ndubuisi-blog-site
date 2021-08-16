import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { HtmlHelper } from "../utils/htmlHelper";
import { Blog } from '../../src/pages/blog';
import { BlogPage } from '../../src/pages/BlogPage';
import path from "path";

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

    public static async RenderBlog(req: Request, res: Response, next: NextFunction): Promise<Response<string,Record<string,any>>|void>{
        try {
            const title = req.params.title.trim();
            if(!title)
                return next();
            const _path: string =  path.join(process.cwd(),'build','data.json');
            const datastring: string = await HtmlHelper.ReadJson(_path);
            const data = JSON.parse(datastring);
            const blog = data[title];
            if(!blog)
                return next();
            
            let blogPage: string = await HtmlHelper.InsertComponent<BlogData>(BlogPage);
        } catch (error) {
            return next(error);
        }
    }
}