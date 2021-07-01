import { appendFile } from 'fs';
import { join } from 'path';
import { Config } from '../config';
import { Request, Response, NextFunction } from 'express';
import { HtmlHelper } from '../utils/htmlHelper';
import { InternalError } from '../../src/pages/internalError';

export class ErrorLogger {
    constructor(){
        this.config = new Config();
    }

    Logger(){
        return async (error:any, req:Request, res:Response, next:NextFunction): Promise<Response<string,Record<string,any>>>  => {
            const status = error.status || error.statusCode || 500;
            const stack =
            this.config.environment === 'production'
                ? {}
                : { ...error, stack: error.stack, status };

            const stringData = JSON.stringify({
                message: error.message,
                ...stack
            });

            this.LogToDisk(stringData);
            const errorPage = await HtmlHelper.InsertComponent(InternalError);
            return res.send(500).send(errorPage);
        }
    }

    LogToDisk (stringData:string){
        appendFile(this.filePath, '\n'+`${new Date().toISOString()}-${stringData}`,
            err =>{
                if(!err){
                    console.log('error logged');
                }
                else{
                    console.log('unable to log error');
                }
            }
        );
    }

    readonly config: Config;
    readonly filePath: string = join(process.cwd(),'logs.txt');
}
