
import path from 'path';
import { FunctionComponent } from "react";
import { readFile } from "fs";
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

export class HtmlHelper {
    public static GetBaseHtml (): Promise<string> {
        return new Promise((resolve, reject)=>{
            if(this.baseHtml)
                return resolve(this.baseHtml);
                
            const htmlPath: string = path.join(process.cwd(),'build','index.html');
            readFile(htmlPath, 'utf-8', (err, data:string) =>{
                if(err){   
                    return reject(err);
                }
                return resolve(data);
            });
        })
    }

    public static async InsertComponent(component: FunctionComponent) : Promise<string> {
        const html = await HtmlHelper.GetBaseHtml();
        var data = html.replace(
            '<div id="root"></div>',
            `<div id="root">${renderToString(createElement(component))}</div>`
        );
        return data;
    }

    private static baseHtml: (string|null) = null;
}