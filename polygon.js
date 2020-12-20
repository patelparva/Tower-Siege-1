class Polygon {
    constructor() {
        this.polygon = Bodies.circle(50,200,20);
        World.add(world,this.polygon);
        this.image=loadImage("polygon.png")
    }
    
    display() {
        var pos=this.polygon.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        pop();
    }
}