var box;
function setup(){
    createCanvas(600, 600);
    box = createSprite(300, 300, 30, 30)
}
function draw(){
    background("black");
    if(keyDown("right")){
        box.x += 5
    }else if(keyDown("left")){
        box.x -= 5
    }else if(keyDown("down")){
        box.y += 5
    }else if(keyDown("up")){
        box.y -= 5
    }
    drawSprites();
}