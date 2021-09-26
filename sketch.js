const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var bg


function preload(){
bg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg);  

  snow1 = new Snow(400)

  drawSprites();
}

