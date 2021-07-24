import { NextFunction, Request, Response } from "express";
import { HtmlHelper } from "../utils/htmlHelper";
import { Home } from '../../src/pages/home';

export class HomeController {
    public static async Homepage(req:Request, res:Response, next:NextFunction): Promise<Response<string,Record<string,any>> | void> {
        try {
            let homePage: string = await HtmlHelper.InsertComponent(Home);
            homePage = HtmlHelper.InsertTitle(homePage, "Home");
            return res.send(homePage);
        } catch (error) {
           return next(error);
        }
    }
}