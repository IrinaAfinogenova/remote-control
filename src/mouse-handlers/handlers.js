import robot from 'robotjs'

const mousePosition = robot.getMousePos;

// TODO сделай граничные условия чтобы когда мышка доходит до конца
// экрана она не перекидывалась на другой конец
export const COMMAND_COLLECTION = {
    mouse_up: ({x, y}, step = 10) => ({x, y: y - step}),
    mouse_down: ({x, y}, step = 10) => ({x, y: y + step}),
    mouse_left : ({x, y}, step = 10) => ({x: x - step, y}),
    mouse_right: ({x, y}, step = 10) => ({x: x + step, y})
};

export const moveMouse = (command, step) => {
    const calcNewPosition = COMMAND_COLLECTION[command] || mousePosition;
    const {x, y} = calcNewPosition(robot.getMousePos(), Number(step));

    robot.moveMouseSmooth(x, y);
};
