import robot from 'robotjs';

export const drawRectangle = ([width, length]: string[]) => {
    const {x, y} = robot.getMousePos();
    const xX = Number(width)
    const yY = Number(length)

    robot.mouseToggle('down', 'left');

    robot.moveMouseSmooth(x, y + yY);
    robot.moveMouseSmooth(x + xX, y + yY - 2);
    robot.moveMouseSmooth(x + xX - 2, y - 2);
    robot.moveMouseSmooth(x - 2, y);

    robot.mouseToggle('up', 'left');

    return;
};
