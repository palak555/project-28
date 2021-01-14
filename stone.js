
class Stone{
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.stone=Bodies.circle(145,60,20,options);
        this.image=loadImage("plucking+mangoes/plucking mangoes/stone.png")
        World.add(world,this.stone)
    }

    display(){

        image(this.image,this.stone.position.x,this.stone.position.y,50,50)
       
        
    }    
}