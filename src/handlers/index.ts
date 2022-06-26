import robot from 'robotjs';
import {WebSocket, RawData} from 'ws';
//import {moveMouse} from './mouse-handlers';
import {COMMANDS} from './types';
import {commandHandlers} from './handlers';
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

    // if (command === 'prnt_scrn') {
    //     const result = await printScreen();
        
    //     wsClient.send(`prnt_scrn ${result}`);
    //     return;
    // }

    return commandHandlers(command, dimensions, wsClient);
}