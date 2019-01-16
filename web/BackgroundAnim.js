const canvas = document.getElementById("BG");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let cw = canvas.width;
let ch = canvas.height;
const colorArray= [
    '#1a1a1a'
    // ,
    // '#ffff00',
    // '#00ff00',
    // '#00ffff',
    // '#0000ff'
];
let ParticleArray = [];
for (let i = 0; i<250; i++){
    ParticleArray.push(
        new Particle(
            (Math.random()*canvas.width)+10,
            (Math.random()*canvas.height)+10,
            (Math.random()*20)+10,
            (Math.random()*10)+1,
            (Math.random()*7)+1
        )
    )
}


Animate();

function Particle(x,y,s,xd,yd){
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.s = Math.floor(s);
    this.xd = Math.floor(xd);
    this.yd = Math.floor(yd);
    // this.xd = Math.floor(0);
    // this.yd = Math.floor(0);
    this.connected = [];
    this.range = cw/12;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x-this.s/2, this.y-this.s/2, this.s, this.s);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+(this.s/2), this.y-this.s);
        ctx.lineTo(this.x+this.s, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = "#f1f1f1"
        // ctx.fill();


    };
    this.drawLine = function(aX,aY,bX,bY){
        ctx.beginPath();
        ctx.moveTo(aX+this.s/2, aY-this.s/2);
        ctx.lineTo(bX, bY);
        ctx.strokeStyle = "#f1f1f1"
        ctx.stroke();
    };
    this.update = function(){
        this.x = this.x + this.xd;
        this.y = this.y + this.yd;
        if((this.x+this.s >= cw-5 && this.y+this.s >= ch-5 ) || (this.x <= cw-cw+5 && this.y <= ch-ch+5)) {
            this.xd = -this.xd;
            this.yd = -this.yd;
        }else if(this.x+this.s >= cw-5 || this.x <= cw-cw+5){
            this.xd = -this.xd;
        }else if(this.y+this.s >= ch-5 || this.y <= ch-ch+5){
            this.yd = -this.yd;
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
    // this.isConnected = function(p2){
    //     for (let i = 0; i<this.connected.length;i++){
    //         if(this.connected[i] === p2){
    //             return true;
    //         }
    //     }
    //       return false;
    //
    // };
    this.connect = function(p2){
        this.drawLine(
            this.x,
            this.y,
            p2.getX()+(p2.getSize()/2),
            p2.getY()-(p2.getSize()/2)
            );
        // if(!this.isConnected(p2)){
        //     this.connected.push(p2);
        //     console.log("New Connection");
        // }
    };
    // this.disconnect = function(p2){
    //     if(this.isConnected(p2)){
    //         for (let i = 0; i<this.connected.length;i++){
    //             if(this.connected[i] === p2){
    //                 this.connected.slice(i,1);
    //                 console.log("Disconnected");
    //             }
    //         }
    //     }
    // };
    this.checkProximity = function(p2, d) {
        if((this.x - p2.getX() < this.range && this.y - p2.getY() < this.range) && (this.x - p2.getX() > -this.range && this.y - p2.getY() > -this.range)){
            this.connect(p2);
        }else{
            // this.disconnect(p2);
        }
    };
}
// ParticleArray = [   new Particle(cw/2, ch/2, 25, 0, 0),
//                     new Particle((cw/2) - 50, ch/2, 25, 0, 0)
//                 ];

function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cw,ch);
    for (let i = 0 ; i<ParticleArray.length;i++){
        for (let n = 0 ; n<ParticleArray.length;n++){
            if(i != n){
                ParticleArray[i].checkProximity(ParticleArray[n]);
            }
        }
        ParticleArray[i].update();
    }
}
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cw = canvas.width;
    ch = canvas.height;
    console.log("RESIZE")
}
window.addEventListener('resize', resize);





