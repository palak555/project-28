class Chain{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:15,
            stiffness:0.004
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    attach(stone){
        this.chain.bodyA = stone;
    }

    fly(){
        this.chain.bodyA = null;
    }
    
    display(){
        if(this.chain.bodyA){
        push()
        stroke("black")
        strokeWeight(5);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        pop()
        }
    }
}