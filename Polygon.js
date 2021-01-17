class Polygon {
    //constructor is used for intializing the properties 
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':2,
          isStatic: false
      }
      //create the body
      this.body = Bodies.rectangle(x, y, width, height, options);
      //define a way to change the width,color, and height, these are properties
      this.width = width;
      this.height = height;
      this.color = "blue"
      //add into world
      World.add(world, this.body);
      this.image = loadImage("polygon.png");

      
    }
    //create a function to display
    display(){
      //create a shortcut to access position and angle of the body
      var pos =this.body.position;
      var angle = this.body.angle
      
      imageMode(CENTER);
      fill(this.color);
  
      //following makes it so the body topples when needed
        //push = saving the current settings
        //pop  = restoring the old settings(before push)
      push()
      //translates the origin to these coordinates
      translate(pos.x,pos.y)
      //rotates it at an angle
      rotate(angle)
      //rect cooridnates is 0,0 to rotate it around the center of the rectangle which is also the origin

      image(this.image, 0, 0, this.width, this.height);

  
      pop()
      
    }
  };
  