import robot from 'robotjs';

export const drawSquare = async ([width]: string[]) => {
    const {x, y} = robot.getMousePos();
    const xX = Number(width)

    robot.mouseToggle('down', 'left');
    // TODO слегка не ровно

    robot.moveMouseSmooth(x, y + xX);
    robot.moveMouseSmooth(x + xX, y + xX);
    robot.moveMouseSmooth(x + xX, y);
    robot.moveMouseSmooth(x, y);

    robot.mouseToggle('up', 'left');

    return;
};
