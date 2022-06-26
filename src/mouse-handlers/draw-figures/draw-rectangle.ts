import robot from 'robotjs';

export const drawRectangle = async ([width, length]: string[]) => {
    const {x, y} = robot.getMousePos();
    const xX = Number(width)
    const yY = Number(length)

    robot.mouseToggle('down', 'left');
    // TODO слегка не ровно

    robot.moveMouseSmooth(x, y + yY);
    robot.moveMouseSmooth(x + xX, y + yY);
    robot.moveMouseSmooth(x + xX - 1, y);
    robot.moveMouseSmooth(x, y);

    robot.mouseToggle('up', 'left');

    return;
};
