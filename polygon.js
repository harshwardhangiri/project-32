class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y,50, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill ("yellow")
        ellipseMode(CENTER);
        ellipse( 0, 0,50);
        pop();
      }
}