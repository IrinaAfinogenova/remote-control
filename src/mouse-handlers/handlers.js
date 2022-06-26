import robot from 'robotjs'

const noop = (arg) => arg;

export const COMMAND_COLLECTION = {
    mouse_up: ({x, y}) => ({x, y: y - 10}),
    mouse_down: ({x, y}) => ({x, y: y + 10}),
    mouse_left : ({x, y}) => ({x: x - 10, y}),
    mouse_right: ({x, y}) => ({x: x + 10, y}) 
};

export const moveMouse = (command) => {
    const calcNewPosition = COMMAND_COLLECTION[command] || noop;
    const {x, y} = calcNewPosition(robot.getMousePos());

    robot.moveMouseSmooth(x, y);
};