import robot from 'robotjs';
import jimp from 'jimp';

export const printScreen = async () => {
    var size = 200;
    var img = robot.screen.capture(0, 0, size, size).image;

    const jimpImg = new jimp({data: img, width: 200, height: 200}, (err, image) => {
        if (err) {
            return console.log('err')
        }
    });

    const buf = await jimpImg.getBufferAsync(jimp.MIME_PNG)
    const result = buf.toString("base64")

    return `prnt_scrn ${result}`;
}