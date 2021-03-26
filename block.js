class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       

        if ((this.body.speed)<3) {
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rect( 0, 0, 30,40);
          pop();

          
        }
        else{
          World.remove(world,this.body);
          
      
        }
        
      }
}