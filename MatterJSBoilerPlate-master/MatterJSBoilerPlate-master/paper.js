class Paper {

construction(x, y, length, width) {
var options = {
isStatic:false, 
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.ellipse(x, y, length, height, options);
this.length = length;
this.width = width;
this.x = x;
this.y = y;
World.add(world, this.body);
}
display() {
var eee = this.body.position;
ellipseMode(CENTER);
ellipse(eee.x, eee.y, this.length, this.width);

}

}