class Side {
    constructor(x, y, width, height) {
        // var options = {
        //     isStatic: true,
        //     restitution: 0.5

        // }
        this.dustbinWidth = 200
        this.dustbinHeight = 213
        this.wallThickness = 20
        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, { isStatic: true })
        this.leftBody = Bodies.rectangle(x - this.dustbinWidth / 2, y - this.dustbinHeight / 2, this.wallThickness, this.dustbinHeight, { isStatic: true })
        this.rightBody = Bodies.rectangle(x+this.dustbinWidth/2 , y-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight, { isStatic: true })
        World.add(world, this.body)
        World.add(world,this.leftBody)
        World.add(world, this.rightBody)


    }

    display() {
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y - 65, this.dustbinWidth, this.dustbinHeight)

    }

}
