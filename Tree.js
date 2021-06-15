class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = 450;
        this.height = 600;
        this.x = x;
        this.y = y;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,-this.height/2,this.width,this.height)
        pop()
    }
}