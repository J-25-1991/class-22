class Box{

constructor(x,y,w,h)
{

this.body=Bodies.rectangle(200,200,100,20,);
this.width=50;
this.height=50;
World.add(world,this.body);
}

display()
{
    var pos=this.body.position;
rect(pos.x,pos.y,this.width,this.height);
}


}