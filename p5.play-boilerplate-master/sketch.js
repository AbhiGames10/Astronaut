const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;
const Body = matter.Body;

var bath, brush, drink, eat, gym, move, sleep, bg
var background;

function preload() {
  bath = loadAnimation("./Astronaut's daily routine/Astronaut's daily routine/bath1.png","bath2.png")
  brush = loadAnimation("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadAnimation("sleep.png")
  bg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);

  background = createSprite(400, 200, 50, 50);
  background.addImage(bg);
}

function draw() {
  background(255,255,255);
  drawSprites();
}