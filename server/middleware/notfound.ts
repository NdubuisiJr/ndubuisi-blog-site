import { Request, Response } from "express";
import { HtmlHelper } from "../utils/htmlHelper";
import { NotFound } from '../../src/pages/notfound';


export class NotFoundHandler {
    static Notfound(): (req: Request, res: Response) => Promise<Response<string, Record<string, any>>>  {
        return async (req:Request, res:Response) : Promise<Response<string, Record<string, any>>>  => {
            let notFoundPage = await HtmlHelper.InsertComponent(NotFound);
            notFoundPage = HtmlHelper.InsertTitle(notFoundPage, "404 - Not found");
            notFoundPage = HtmlHelper.InsertDescription(notFoundPage, "Page not found"); 
            return res.status(404).send(notFoundPage);
        };
    } 
};