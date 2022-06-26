import robot from 'robotjs'

interface Coordinates {
    x: number;
    y: number;
}

type COMMANDS = 'mouse_up' | 'mouse_down' | 'mouse_left' |'mouse_right';

// TODO сделай граничные условия чтобы когда мышка доходит до конца
// экрана она не перекидывалась на другой конец

const mouseUp = ({x, y}: Coordinates, step: number = 10): Coordinates => ({x, y: y - step});
const mouseDown = ({x, y}: Coordinates, step: number = 10): Coordinates => ({x, y: y + step});
const mouseLeft = ({x, y}: Coordinates, step: number = 10): Coordinates => ({x: x - step, y})
const mouseRight = ({x, y}: Coordinates, step: number = 10): Coordinates => ({x: x + step, y});
const mousePosition = ({x, y}: Coordinates) => ({x, y})

export const COMMAND_COLLECTION = {
    mouse_up: mouseUp,
    mouse_down: mouseDown,
    mouse_left : mouseLeft,
    mouse_right: mouseRight
};

export const moveMouse = (command: COMMANDS, [step]: string[]) => {
    const calcNewPosition = COMMAND_COLLECTION[command] || mousePosition
    const {x, y} = calcNewPosition(robot.getMousePos(), Number(step));

    robot.moveMouseSmooth(x, y);
};
