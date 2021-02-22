/* ------ JavaScript - HTML Canvas Particles - HSL Color Gradient - Applied Gradient 2 ------ */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d'); // ctx is short for context.
ctx.canvas.width = window.innerWidth; // setting window width.
ctx.canvas.height = window.innerHeight; // setting window height.
let numberOfParticles = 200;
const particlesArray = [];
//let hue = 0;

const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0.2', 'red');
gradient.addColorStop('0.4', 'blue');
gradient.addColorStop('0.6', 'yellow');
gradient.addColorStop('0.8', 'pink');

const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient2.addColorStop('0.2', 'black');
gradient2.addColorStop('0.5', 'transparent'); 
gradient2.addColorStop('0.8', 'white');

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random()* canvas.height;
        this.radius = (Math.random() * 18) + 2;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY = (Math.random() * 3) - 1.5;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient; // this is the color control.
        ctx.fill();
        ctx.strokeStyle = gradient2;
        ctx.stroke();
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.radius > canvas.width ||
            this.x - this.radius < 0){
                this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height ||
            this.y - this.radius < 0){
                this.speedY = -this.speedY;
        }
        this.draw();
    }
}
function init(){
    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle());
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // this will clear the canvas of already drawn particle trails, showing a single frame.
    //ctx.fillStyle = 'rgba(255,255,255,0.01)'; // this will leave semi transparent trails beacause of the alpha value. Dissable clearRect above for this to work.
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
    //hue+=0.5;
    requestAnimationFrame(animate);
}
init();
animate();

