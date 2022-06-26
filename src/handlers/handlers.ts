import robot from 'robotjs';
import {drawCircle, drawRectangle, drawSquare} from './draw-figures';
import {
    mouseUp,
    mouseDown,
    mouseLeft,
    mouseRight,
    mousePosition
} from './mouse-handlers';
import {printScreen} from './print-screen';

export const COMMAND_COLLECTION = {
    mouse_up: mouseUp,
    mouse_down: mouseDown,
    mouse_left : mouseLeft,
    mouse_right: mouseRight,
    mouse_position: mousePosition,
    draw_circle: drawCircle,
    draw_rectangle: drawRectangle,
    draw_square : drawSquare,
    prnt_scrn: printScreen
};

export const commandHandlers = async(command, dimensions, wsClient) => {
    const callCommand = COMMAND_COLLECTION[command] || mousePosition

    const result = await callCommand(dimensions);
    wsClient.send(result ? result : command);
};