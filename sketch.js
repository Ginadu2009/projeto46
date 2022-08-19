const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var jogador1, jogador1Img, jogador2, jogador2Img;
var fundo;
var plateia;
var placarJogador1 = 0
var placarJogador2 = 0
var cesta;
var bola1J1,bola2J1, bolaImg;
var bola2J, bola2Img
var estadoJogo = "Start"

function preload(){
fundo = loadImage("Imagens/quadraBasquete.jpg")
jogador2Img = loadImage("Imagens/Jogador2.png")
bolaImg = loadImage("Imagens/bola-de-basquete.png")
bola2Img = loadImage("Imagens/bola-de-basquete.png")
jogador1Img= loadImage("Imagens/Jogador1.png")

}

function setup(){
engine = Engine.create();
world = engine.world;
Engine.run(engine);    
createCanvas(windowWidth,windowHeight)
jogador1 = createSprite(width/2+300,height/2+100,50,10);
jogador1.addImage("parado1",jogador1Img)
jogador1.scale = 0.5
jogador2 = createSprite(width/2-300,height/2+100,50,10);
jogador2.addImage("parado2",jogador2Img)
jogador2.scale = 0.4
cesta=new dustbin(250,height/2)
var options ={isStatic: true, frictionAir:1}
bola1J1=Bodies.circle(500,height/2+250,40, options)
	World.add(world,bola1J1)
bola2J=Bodies.circle(width/2+300,height/2+250,40, options)
	World.add(world,bola2J)
}

function draw(){
background(fundo);

if(estadoJogo === "Start"){
    textAlign(CENTER)
    textSize(35)
    fill("white")
    text("Prepare-se para o jogo começar!",width/2,height/2+30)

    
    image(bolaImg,bola1J1.position.x,bola1J1.position.y,40,40)
    image(bola2Img,bola2J.position.x,bola2J.position.y,40,40)


//estadoJogo = "Jogando"    

}

//if(estadoJogo === "Jogando"){
    if(keyDown("space") && jogador2.x>10){//tecla w
        jogador2.x-=10
        jogador2.y-=2
        //jogador2.changeImage

    }
//}
if(keyDown("enter") && jogador1.x<width-10){//tecla w
    jogador1.x+=10
    jogador1.y-=2
    //jogador2.changeImage

}

//Olhar o jogo do gato se a bola estiver na msm posição da cesta parca o ponto e volta pra posição inicial

drawSprites();

}

function keyPressed(){
    if (keyCode === UP_ARROW) {		
          Matter.Body.setStatic(bola1J1,false)
          Matter.Body.applyForce(bola1J1,bola1J1.position,{x:0,y:-1});
      }
      if (keyCode === RIGHT_ARROW) {		
        Matter.Body.setStatic(bola1J1,false)
        Matter.Body.applyForce(bola1J1,bola1J1.position,{x:1,y:0});
    }
    if (keyCode === LEFT_ARROW) {		
        Matter.Body.setStatic(bola1J1,false)
        Matter.Body.applyForce(bola1J1,bola1J1.position,{x:-1,y:0});
    }

    
    if (keyCode === 79) {		
        Matter.Body.setStatic(bola2J,false)
        Matter.Body.applyForce(bola2J,bola2J.position,{x:0,y:-1});
    }
    if (keyCode === 75) {		
      Matter.Body.setStatic(bola2J,false)
      Matter.Body.applyForce(bola2J,bola2J.position,{x:1,y:0});
  }
  if (keyCode === 76) {		
      Matter.Body.setStatic(bola2J,false)
      Matter.Body.applyForce(bola2J,bola2J.position,{x:-1,y:0});
  }
  }
