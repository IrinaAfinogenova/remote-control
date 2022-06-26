import robot from 'robotjs'
import {moveMouse}from './handlers.js';

export const handlers = (wsClient, messageBuf) => {
    const message = messageBuf.toString();
    const [command, step] = message.split(' ');

    if (command === 'mouse_position') {
        const {x, y} = robot.getMousePos(); 

        wsClient.send(`mouse_position ${x},${y}`);

        return;
    }

    return moveMouse(command, step);
}