class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width = 450;
		this.height = 500;
			
		this.image=loadImage("images/tree.png")
		this.tree=Bodies.rectangle(this.x, this.y, 0, 500, {isStatic:true})
		
		World.add(world, this.tree);

	}
	display()
	{
			var pos=this.tree.position;
			push()
			translate(pos.x, pos.y);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,450, 500)
			pop()
			
	}

}