var car, wall;
var speed, weight;
var deformation;

function setup() {
    createCanvas(windowWidth,windowHeight);
    wall = createSprite(width*0.8,200,60,200);
    car = createSprite(400, 200, 40, 40);
    car.shapeColor = "white";

    speed = Math.round(random(55,90));
    weight = Math.round(random(400,1500));
    deformation = (0.5 * width * speed * speed)/22500
}

function draw() {
    background(0);
    car.velocityX = speed;
    if(wall.x - car.x < (wall.width + car.width)/2) {
        car.velocityX = 0;
       
        if(deformation <= 100) {
            car.shapeColor = color(0,255,0);
        }
        else if(deformation <= 180 && deformation > 100) {
            car.shapeColor = color(230,230,0);
        }
        else if(deformation > 180) {
            car.shapeColor = color(255,0,0);
        }
        text("Speed: " + speed, (width/4) , 50);
        text("Weight: " + weight, (width /2), 50);
        text("Deformation: " + deformation, width * 3/4 , 50);
    }
    drawSprites();
}

