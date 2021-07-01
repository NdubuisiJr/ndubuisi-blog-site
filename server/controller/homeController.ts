import { NextFunction, Request, Response } from "express";

export class HomeController {
    public static Homepage(req:Request, res:Response, next:NextFunction) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}