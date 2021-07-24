import { NextFunction, Request, Response } from "express";
import { HtmlHelper } from "../utils/htmlHelper";
import { Contact } from '../../src/pages/contact';

export default class ContactController {
    public static async ContactInfo (req: Request, res: Response, next: NextFunction):Promise<void | Response<any, Record<string, any>>> {
        try {
            let contactPage:string = await HtmlHelper.InsertComponent(Contact);
            contactPage = HtmlHelper.InsertTitle(contactPage, "Contact");
            contactPage = HtmlHelper.InsertDescription(contactPage,
                `This contains all of the informations required to contact or reach out to me`
            );
            return res.status(200).send(contactPage);
        } catch (error) {
            return next(error);
        }
    }   
}