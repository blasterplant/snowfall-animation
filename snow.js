class Snow
{
  Constructor(x){
    var options = {
      'friction':1.0,
      'density':1.0,
      'restitution': 0.5
    }
    
    this.body = Bodies.rectangle(x,400,50,50,options)
    this.Image = LoadImage("snow4.webp");
    World.add(world,this.body)
  }
  display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,400,50,50);
    pop();
  }
}