import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer, WebSocket } from 'ws';
import {handlers} from './src/mouse-handlers/index';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({port: 9000});

const onConnect = (wsClient: WebSocket) => {
    wsClient.send('connected');
    wsClient.on('message', (message) => {
        handlers(wsClient, message)
    });
    wsClient.on('close', () => {
        console.log('user is diconected')
    });
}

wsServer.on('connection', onConnect);
