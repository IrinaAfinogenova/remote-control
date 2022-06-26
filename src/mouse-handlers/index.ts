import robot from 'robotjs';
import {WebSocket, RawData} from 'ws';
import {moveMouse} from './handlers';
import {COMMANDS} from './types';

type parsedMessege =  [COMMANDS, string]

export const handlers = (wsClient: WebSocket, messageBuf: RawData) => {
    const message = messageBuf.toString();
    const [command, step] = message.split(' ') as parsedMessege;

    if (command === 'mouse_position') {
        const {x, y} = robot.getMousePos(); 

        wsClient.send(`mouse_position ${x},${y}`);

        return;
    }

    return moveMouse(command, step);
}