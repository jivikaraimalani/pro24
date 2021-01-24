class Ground{
    constructor(x, y) {
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectanglr(x, y, 800,15, options);
        this.radius = 30;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       // pos.x = mouseX;
        //pos.y = mouseY;
        pos.collide(ground);
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}