import {moveMouse}from './handlers.js';

export const handlers = (messageBuf) => {
    const message = messageBuf.toString();
    const [command, step] = message.split(' ');

    return moveMouse(command);
}