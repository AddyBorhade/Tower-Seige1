class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.04, 
			length:10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        //checks if the constraint is present or not and if not then do not display
        if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    //this removes the body(bodyA) from the constraint(this.chain) by making it null
    fly(){
        this.chain.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }
}