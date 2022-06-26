import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import robot from 'robotjs';
import {Transform} from 'stream';
import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import {handlers} from './src/mouse-handlers/index';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({port: 9000});

const onConnect = (wsClient: WebSocket) => {
    const duplex = createWebSocketStream(wsClient, { encoding: 'utf8' });

    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            handlers(wsClient, chunk)
            callback();
        }
    });

    duplex.pipe(transform);
    wsClient.send('connected');
}

wsServer.on('connection', onConnect);

wsServer.on('close', () => {
    console.log('connection is closed');
});
