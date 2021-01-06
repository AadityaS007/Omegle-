class Paper {
    constructor(x, y, r) {


        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: false

        }
        this.radius = r;
        this.body = Bodies.circle(x, y, (r - 20) / 2, options);

        World.add(world, this.body);
        this.image = loadImage("paper.png")
    }
    display() {

        // ellipseMode(RADIUS)
        // ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
}