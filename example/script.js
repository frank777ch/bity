const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;

// let x = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteWidth);

    // ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteWidth);
    
    // ctx.fillRect(50, 50, 100, 100);
    // ctx.fillRect(0, x, 100, 100);
    // ctx.fillRect(x, 0, 100, 100);
    // ctx.fillRect(x, x, 200, 200);
    // x++;

    if (frameX < 6) frameX++;
    else frameX = 0;
    
    requestAnimationFrame(animate);
}

animate();