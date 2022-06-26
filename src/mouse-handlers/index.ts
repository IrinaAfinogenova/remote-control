import robot from 'robotjs';
import {WebSocket, RawData} from 'ws';
import {moveMouse} from './handlers';
import {COMMANDS} from './types';
import {drawCircle} from './draw-figures/draw-circle';
import {drawRectangle} from './draw-figures/draw-rectangle';
import {drawSquare} from './draw-figures/draw-square';
import {printScreen} from './print-screen';

type parsedMessege =  [COMMANDS, string]

export const handlers = async (wsClient: WebSocket, messageBuf: RawData) => {
    const message = messageBuf.toString();
    const [command, ...steps] = message.split(' ') as parsedMessege;

    // TODO переименовать steps

    console.log(message)

    if (command === 'mouse_position') {
        const {x, y} = robot.getMousePos(); 

        wsClient.send(`mouse_position ${x},${y}`);

        return;
    }

    if (command === 'draw_circle') {
        drawCircle(steps);

        return;
    }

    if (command === 'draw_rectangle') {
        drawRectangle(steps);

        return;
    }

    if (command === 'draw_square') {
        drawSquare(steps);

        return;
    }

    if (command === 'prnt_scrn') {
        const result = await printScreen();
        
        wsClient.send(`prnt_scrn ${result}`);
        return;
    }

    return moveMouse(command, steps);
}