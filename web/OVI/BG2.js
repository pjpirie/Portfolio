const canvas = document.getElementById("BG");
const text = document.querySelector("div#hero>div");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let cw = canvas.width;
let ch = canvas.height;
const colorArray= [
    '242, 56, 90',
    '245, 165, 3',
    '74, 217, 217',
    '54, 177, 191',
    '132, 255, 142'
];
let alpha = 0;
let ParticleArray = [];
function start(){
    ParticleArray = [];
    for (let i = 0; i<250; i++){
        ParticleArray.push(
            new Particle(
                cw/2,
                ch/2,
                (Math.random()*20)+10,
                (Math.random()*canvas.width)+10,
                (Math.random()*canvas.height)+10
            )
        )
    }
}
start();



Animate();

function Particle(x,y,s,fX,fY){
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.s = Math.floor(s);
    this.fx = Math.floor(fX);
    this.fy = Math.floor(fY);
    this.range = 100;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    // this.color = colorArray[1];
    this.alpha = randomNumber(0.3,1);
    this.vel = randomNumber(5,10);
    this.finalX = false;
    this.finalY = false;

    this.draw = function(){
        ctx.fillStyle = 'rgba('+this.color+', '+this.alpha+')';
        ctx.fillRect(this.x-this.s/2, this.y-this.s/2, this.s, this.s);
        ctx.fill();



    };
    this.update = function(){
        if(xNegative(this.fx) == true){
            if (this.x >= this.fx){
                this.x = this.x - this.vel;
                this.finalX = false;
            }else{
                this.finalX = true;
            }
        }else{
            if (this.x <= this.fx){
                this.x = this.x + this.vel;
                this.finalX = false;
            }else{
                this.finalX = true;
            }
        }

        if(yNegative(this.fy) == true){
            if (this.y >= this.fy){
                this.y = this.y - this.vel/2;
                this.finalY = false;
            }else{
                this.finalY = true;
            }
        }else{
            if (this.y <= this.fy){
                this.y = this.y + this.vel/2;
                this.finalY = false;
            }else{
                this.finalY = true;
            }
        }
        this.draw();
    };
    this.getX = function(){
        return this.x;
    };
    this.getY = function(){
        return this.y;
    };
    this.getSize = function(){
        return this.s;
    };
    this.checkProximity = function(dx,dy) {

        if(
            (this.x - cw/2 < dx && this.y - ch/2 < dy )
            &&
            (this.x - cw/2 > -dx && this.y - ch/2 > -dy)
            &&
            (this.finalX == true)
            &&
            (this.finalY == true)
        ){
                this.alpha = 0.1;
                // this.color = colorArray[3];
         }
    };
}


function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cw,ch);
    for (let i = 0 ; i<ParticleArray.length;i++){
        // console.log(text.clientWidth+" "+text.clientHeight);
        ParticleArray[i].checkProximity(text.clientWidth/2,text.clientHeight/1.4);
        ParticleArray[i].update();
    }
}
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function xNegative(num) {
    if(num < cw/2){
        return true;
    }else{
        return false;
    }
}
function yNegative(num) {
    if(num < ch/2){
        return true;
    }else{
        return false;
    }
}
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cw = canvas.width;
    ch = canvas.height;
    start();
    console.log("RESIZE")
}
window.addEventListener('resize', resize);





