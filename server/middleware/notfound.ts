import { Request, Response } from "express";
import { HtmlHelper } from "../utils/htmlHelper";
import { NotFound } from '../../src/pages/notfound';


export class NotFoundHandler {
    static Notfound(): (req: Request, res: Response) => Promise<Response<string, Record<string, any>>>  {
        return async (req:Request, res:Response) : Promise<Response<string, Record<string, any>>>  => {
            var notFoundPage = await HtmlHelper.InsertComponent(NotFound);
            return res.status(404).send(notFoundPage);
        };
    } 
};