class Tree{
    constructor(){
        this.tree=Bodies.rectangle(1450,820,200,400,{isStatic:true})
        this.width=350;
        this.height=500;
        this.image=loadImage("plucking+mangoes/plucking mangoes/tree.png")
        World.add(world,this.tree)
    }

    display(){
        imageMode(CENTER)
        image(this.image,1400,420,600,600)
        
    }
}