// Variables
var runner, groundGroup;

var running, jumping, sliding, dead;
var running2, idle;

// Functions
function preload(){
  running = loadAnimation("./animations/player/run/Run1.png",
  "./animations/player/run/Run2.png",
  "./animations/player/run/Run3.png",
  "./animations/player/run/Run4.png",
  "./animations/player/run/Run5.png",
  "./animations/player/run/Run6.png",
  "./animations/player/run/Run7.png",
  "./animations/player/run/Run8.png")
}

function setup(){

  

  createCanvas(windowWidth, windowHeight);
  runner = new Player()

  
}

function draw(){
  background("#25763199")



  // generateGround(groundGroup, runner.RunningVelocity)
  drawSprites();
}

/* function generateGround(group, playerVelocity){
  if(frameCount%60 === 0){
    var ground = createSprite(windowWidth * 3, windowHeight + 400, Math.round(random(200, 800)), 100)
    ground.shapeColor = "yellow"
    ground.velocityX = playerVelocity
    group.add(ground)
  }
} */ // Having Some Difficulties Here, Hence I Commented It

// Classes

class Player{
  constructor(){
    this.RunningVelocity = 2

    var p = createSprite(400, windowHeight - 300, 25, 135)
    p.addAnimation("running", running)
    p.scale = 0.35
  }

}