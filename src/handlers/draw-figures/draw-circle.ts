import robot from 'robotjs';

export const drawCircle = ([step]: string[]) => {
    const {x, y} = robot.getMousePos();

    const radius = Number(step);

    robot.moveMouse(x + radius - 1, y);
    robot.mouseToggle('down', 'left');

    for (let i = 0; i < 360; i++) {
        let circleX = x + radius * Math.cos((2 * Math.PI * i) / 360);
        let circleY = y + radius * Math.sin((2 * Math.PI * i) / 360);

        robot.dragMouse(circleX, circleY); // в чем разница с move?
    }

    robot.mouseToggle('up', 'left');

    return;
};
