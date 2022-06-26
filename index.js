import Jimp from 'jimp';
import {httpServer} from './src/http_server/index.js';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import {handlers} from './src/mouse-handlers/index.js';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
const wsServer = new WebSocketServer({port: 9000});

const onConnect = (wsClient) => {
    wsClient.send('connected');
    wsClient.on('message', (message) => {
        handlers(message)
    });
    wsClient.on('close', () => {
        console.log('user is diconected')
    });
}


wsServer.on('connection', onConnect);
