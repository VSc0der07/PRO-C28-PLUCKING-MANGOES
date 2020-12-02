class Tree {
constructor(x,y,width,height) {
var options = {
    restitution:1,
    isStatic: true,
    friction:false,
    density : 0
}

this.Image = loadImage ("tree.png")
this.body = Bodies.rectangle (x,y,width,height)
World.add (world,this.body);
}

display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
}
}