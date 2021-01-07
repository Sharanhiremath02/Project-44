const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man,manImg;
var arrow,arrowImg;
var bow,bowImg;
var archeryBoard,archeryBoardImg;
var arr1,arr2,arr3,arr4;
var arrows;
var arrows=[];
var gameState="onBow";

function preload(){
    backgroundImg = loadImage("images/archery bacground3.jpg");
    manImg = loadImage("images/archery2.png");
   // arrowImg = loadImage("images/archery arrow2.png");
    archeryBoardImg = loadImage("images/archery board 2.png");

}


function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    arr1= new Arrow(280,470,250,100);
    // arr2= new Arrow(280,470,250,100);
    // arr3= new Arrow(280,470,250,100);
    // arr4= new Arrow(280,470,250,100);
    
    // arrows.push(arr4);
    // arrows.push(arr3);
    // arrows.push(arr2);
    // arrows.push(arr1);

    bow= new Bow(arr1.body,{x:280,y:470})
}




function draw(){
    background(backgroundImg);
    Engine.update(engine);
    image(archeryBoardImg,width-500,height/2-50,400,400);
    image(manImg,100,height/2-100,200,400);
    textSize(20);
    fill("blue");
    text(mouseX+","+mouseY,mouseX,mouseY);
    //drawSprites();
    arr1.display();
    // arr2.display();
    // arr3.display();
    // arr4.display();
    bow.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(arr1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    bow.fly();
    gameState = "launched";
}

