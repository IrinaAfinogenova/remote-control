import robot from 'robotjs'
import {WebSocket} from 'ws';

interface Coordinates {
    x: number;
    y: number;
}

// TODO сделай граничные условия чтобы когда мышка доходит до конца
// экрана она не перекидывалась на другой конец

const getCoordinates = (func) => {
    const {x, y} = robot.getMousePos();

    return func({x, y});
};

const moveMouseUp = ({x, y}: Coordinates) => ([step]: string[] = ['10']) => {robot.moveMouseSmooth(x, y - Number(step));};
const moveMouseDown = ({x, y}: Coordinates) => ([step]: string[] = ['10']) => {robot.moveMouseSmooth(x, y + Number(step));};
const moveMouseLeft = ({x, y}: Coordinates) => ([step]: string[] = ['10']) => {robot.moveMouseSmooth(x - Number(step), y);};
const moveMouseRight = ({x, y}: Coordinates) => ([step]: string[] = ['10']) => {robot.moveMouseSmooth(x + Number(step), y);};
const giveMousePosition =  ({x, y}: Coordinates) => () => `mouse_position ${x},${y}`;

export const mouseUp = (...args) => getCoordinates(moveMouseUp)(args);
export const mouseDown = (...args) => getCoordinates(moveMouseDown)(args);
export const mouseLeft = (...args) => getCoordinates(moveMouseLeft)(args);
export const mouseRight = (...args) => getCoordinates(moveMouseRight)(args);
export const mousePosition = (...args) => getCoordinates(giveMousePosition)(args);
