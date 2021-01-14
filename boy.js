class Boy{
    constructor(){
        this.boy=Bodies.rectangle(250,450,2,2,{isStatic:true})
        this.width=30;
        this.height=50;
        this.image=loadImage("plucking+mangoes/plucking mangoes/boy.png")
        World.add(world,this.boy)
        
    }

    display(){
        imageMode(CENTER)
        image(this.image,300,550,200,300)
   
    
    
    }
}