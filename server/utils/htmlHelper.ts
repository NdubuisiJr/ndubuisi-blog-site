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
                if(err)   
                    return reject(err);
                return resolve(data);
            });
        })
    }

    public static async InsertComponent(component: FunctionComponent) : Promise<string> {
        const html: string = await HtmlHelper.GetBaseHtml();
        var data: string = html.replace(
            '<main id="root"></main>',
            `<main id="root">${renderToString(createElement(component))}</main>`
        );
        return data;
    }

    public static InsertTitle(page: string, title: string): string {
        const data: string = page.replace('{{title}}', title);
        return data;
    }

    public static InsertDescription(page:string, description: string): string {
        const data: string = page.replace('{{meta-description}}', description);
        return data;
    }

    private static baseHtml: (string|null) = null;
}