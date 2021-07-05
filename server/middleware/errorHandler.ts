import { appendFile } from 'fs';
import { join } from 'path';
import { Config } from '../config';
import { Request, Response, NextFunction } from 'express';
import { HtmlHelper } from '../utils/htmlHelper';
import { InternalError } from '../../src/pages/internalError';

export class ErrorHandler {

    static ErrorPageHandler(){
        return async (req:Request, res:Response):Promise<Response<string,Record<string,any>>> => {
            const errorPage = await HtmlHelper.InsertComponent(InternalError);
            return res.status(500).send(errorPage);
        }
    }

    static Logger(){
        return async (error:any, req:Request, res:Response, next:NextFunction): Promise<void>  => {
            const status = error.status || error.statusCode || 500;
            const stack =
            this.config.environment === 'production'
                ? {}
                : { ...error, stack: error.stack, status };

            const stringData = JSON.stringify({
                message: error.message,
                ...stack
            });

            await this.LogToDisk(stringData);
            return res.redirect('/error');
        }
    }

    static LogToDisk (stringData:string){
        return new Promise<boolean>((resolve, reject)=> {
            appendFile(this.filePath, '\n'+`${new Date().toISOString()}-${stringData}`,
            err =>{
                if(!err){
                    console.log('error logged');
                    resolve(true);
                }
                else{
                    console.log('unable to log error');
                    reject(err)
                }
            }
        );
        })
    }

    static readonly config: Config = new Config();
    static readonly filePath: string = join(process.cwd(),'logs.txt');
}
