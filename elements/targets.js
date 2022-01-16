class Targets {
    constructor(index){
        this.id = index,
        this.x= Math.random(),
        this.y= Math.random(),
        this.speedX = 0,
        this.speedY = 0,
        this.color = 'green'
        this.radius = (Math.random()* 2)+ player.radius;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width + this.radius) {
            this.x = - this.radius
        }
        if (this.x < - this.radius) {
            this.x = canvas.width + this.radius 
        }
        if (this.y > canvas.height + this.radius) {
            this.y = - this.radius
        }
        if (this.y < -this.radius) {
            this.y = canvas.height + this.radius
        }
    }
    move(offset){
        if (this.speedX === 0) {
            this.speedX = (Math.random()- 0.5) *2 *offset
            this.speedY = (Math.random() -.5) *2 *offset
        }
        // else if(this.speedY < 7 || this.speedX < 7 || this.speedX < -7 || this.speedY < -7) {
            //     this.speedX += (Math.random() - .5)*.5
        //     this.speedY += (Math.random() - .5)*.5
        // }
        // else{
            //     this.speedX = 7
            //     this.speedY = 7
            // }
            
        }
    }
    