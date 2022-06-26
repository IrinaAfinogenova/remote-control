import robot from 'robotjs';

export const drawSquare = ([width]: string[]) => {
    const {x, y} = robot.getMousePos();
    const xX = Number(width)

    robot.mouseToggle('down', 'left');

    robot.moveMouseSmooth(x, y + xX);
    robot.moveMouseSmooth(x + xX, y + xX - 2);
    robot.moveMouseSmooth(x + xX - 2 , y -2);
    robot.moveMouseSmooth(x - 2, y);

    robot.mouseToggle('up', 'left');

    return;
};
