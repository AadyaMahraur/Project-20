var tom, jerry,bg,bgImage, tomImage1, jerryImage1;
var tomImage2, jerryImage2, tomImage3,jerryImage3;
function preload() {
    //load the images here
    bgImage=loadImage("garden.png");

    tomImage1=loadAnimation("cat1.png");
    tomImage2=loadAnimation("cat2.png","cat3.png");
    tomImage3=loadAnimation("cat4.png");

    jerryImage1=loadAnimation("mouse1.png");
    jerryImage2=loadAnimation("mouse2.png","mouse3.png");
    jerryImage3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500,400,20,20);
    bg.addImage("background",bgImage);

    //create tom and jerry sprites here
    tom=createSprite(700,650.50,50);
    tom.addAnimation("tomstanding",tomImage1);
    tom.scale=0.1;

    jerry=createSprite(300,650,50,50);
    jerry.addAnimation("jerrystanding",jerryImage1);
    jerry.scale=0.1;
}

function draw() {

    background("white");
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width- jerry.width)/2){
        tom.addAnimation("happytom",tomImage3);
        tom.changeAnimation("happytom");
        tom.velocityX=0;
        tom.x=jerry.x+80
        jerry.addAnimation("happyjerry",jerryImage3);
        jerry.changeAnimation("happyjerry");

    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyDown("left_arrow")){
        jerry.addAnimation("jerryteasing",jerryImage2);
        jerry.changeAnimation("jerryteasing");
        
        tom.addAnimation("tommoving",tomImage2);
        tom.changeAnimation("tommoving");
        tom.velocityX=-3.5;
    }

}
