import robot from 'robotjs';
import {WebSocket, RawData} from 'ws';
import {moveMouse} from './handlers';
import {COMMANDS} from './types';
import {
    drawCircle,
    drawRectangle,
    drawSquare
} from './draw-figures';
import {printScreen} from './print-screen';

type ParsedMessege = [COMMANDS, string]

export const handlers = async (wsClient: WebSocket, messageBuf: RawData) => {
    const message = messageBuf.toString();
    const [command, ...dimensions] = message.split(' ') as [COMMANDS, string]

    if (command === 'mouse_position') {
        const {x, y} = robot.getMousePos(); 

        wsClient.send(`mouse_position ${x},${y}`);

        return;
    }

    if (command === 'draw_circle') {
        drawCircle(dimensions);
        wsClient.send('draw_circle')

        return;
    }

    if (command === 'draw_rectangle') {
        drawRectangle(dimensions);
        wsClient.send('draw_rectangle')

        return;
    }

    if (command === 'draw_square') {
        drawSquare(dimensions);
        wsClient.send('draw_square')

        return;
    }

    if (command === 'prnt_scrn') {
        const result = await printScreen();
        
        wsClient.send(`prnt_scrn ${result}`);
        return;
    }

    return moveMouse(command, dimensions, wsClient);
}