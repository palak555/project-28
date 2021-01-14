class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
          
        }

        this.mango=Bodies.circle(x,y,10,options);
        this.image=loadImage("plucking+mangoes/plucking mangoes/mango.png")
        World.add(world,this.mango)
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.mango.position.x,this.mango.position.y,40,40)
        
    }    
}