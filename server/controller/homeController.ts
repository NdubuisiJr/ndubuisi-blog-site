import { NextFunction, Request, Response } from "express";
import { HtmlHelper } from "../utils/htmlHelper";
import { Home } from '../../src/pages/home';

export class HomeController {
    public static async Homepage(req:Request, res:Response, next:NextFunction): Promise<Response<string,Record<string,any>> | void> {
        try {
            const homePage: string = await HtmlHelper.InsertComponent(Home);
            return res.status(200).send(homePage);
        } catch (error) {
           return next(error);
        }
    }
}