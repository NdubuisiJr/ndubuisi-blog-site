import express, { Application } from 'express';
import fs from 'fs';
import React from 'react'; 
import ReactDomServer from 'react-dom/server';
import { Blog } from '../src/pages/blog';
import { Home } from '../src/pages/home';
import { Config } from './config';
import { ErrorHandler } from './middleware/errorHandler';
import { NotFoundHandler } from './middleware/notfound';

const server: Application = express(); 
const config: Config = new Config(); 
const errorHandler: ErrorHandler = new ErrorHandler();

server.get('/', (req, res, next)=>{
    try {
        fs.readFile('./build/index.html', 'utf-8', (err, data)=>{
            try { 
                throw 'wahala';
                if(err){   
                    console.log('error occured');
                    //return res.status(500).send('internal server error');
                }
                res.send(data.replace('<div id="root"></div>',`<div id="root">   
                ${ReactDomServer.renderToString(React.createElement(Home))}
            </div>`));
            } catch (error) {
                next(error);
            }
        });
    } catch (error) {
        next(error);
    }
});

server.get('/blog', (req, res) => {
        fs.readFile('./build/index.html', 'utf-8', (err, data)=>{
        if(err){   
            console.log(err);
            return res.status(500).send('internal server error');
        }
        res.send(data.replace('<div id="root"></div>',`<div id="root">  
            ${ReactDomServer.renderToString(React.createElement(Blog))}
        </div>`));
    });
}) 
server.use(express.static('build'));


server.use('/error', errorHandler.ErrorPageHandler());
server.use(NotFoundHandler.Notfound());
server.use(errorHandler.Logger())

server.listen(config.port, ()=>{
    console.log(`Listening on port ${config.port} on ${config.environment} mode`);
})