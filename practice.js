console.log("This is js file");
let canvas = document.querySelector("canvas");
let context=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
class Arc{
    constructor(x,y,dx,dy,radius){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
    }
    createCircle(){
        context.beginPath();
        context.fillStyle="red";
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.stroke();
        this.animateCircle();
    }
    animateCircle(){
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x+this.radius>innerWidth|| this.x-this.radius<0){
            this.dx=-this.dx
        }
        if(this.y+this.radius>innerHeight|| this.y-this.radius<0){
            this.dy=-this.dy
        }

    }
}
let circleArray=[];
for(let i = 0;i<100;i++){
    let x = Math.random()*innerWidth;
    let y = Math.random()*innerHeight;
    let dx = (Math.random()-0.5)*8;
    let dy = (Math.random()-0.5)*8;
    let radius = 50;
    circleArray.push(new Arc(x,y,dx,dy,radius))
}
console.log(circleArray);
let circle1 = new Arc(200,200,7,7,50);

function animate(){
    requestAnimationFrame(animate);
    // context.clearRect(0,0,innerWidth,innerHeight);
    circle1.createCircle();
    for(let i=0;i<circleArray.length;i++){
        circleArray[i].createCircle();
    }
}
animate();