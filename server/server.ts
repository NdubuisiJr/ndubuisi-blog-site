import express from 'express';
import fs from 'fs';
import React from 'react'; 
import ReactDomServer from 'react-dom/server';
import { Blog } from '../src/pages/blog';
import { Home } from '../src/pages/home';
import { ErrorLogger } from './middleware/errorLogger';
import { NotFoundHandler } from './middleware/notfound';

const server = express(); 

server.get('/', (req, res)=>{
    fs.readFile('./build/index.html', 'utf-8', (err, data)=>{
        if(err){   
            console.log(err);
            return res.status(500).send('internal server error');
        }
        res.send(data.replace('<div id="root"></div>',`<div id="root">  
            ${ReactDomServer.renderToString(React.createElement(Home))}
        </div>`));
    });
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
server.use(NotFoundHandler.Notfound());
server.use(new ErrorLogger().Logger())

server.listen(9000, ()=>{
    console.log('listening on port 9000')
})