var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo
path = createSprite(200,0,10,10)
path.addImage(pathImg)
path.velocityY = 4
path.scale = 1.2

//Criando menino que corre 
boy = createSprite(200,200)
boy.addAnimation("boy",boyImg)
boy.scale = 0.08

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(0,0,-100,80)
rightBoundary.visible = false;
}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
boy.collide(leftBoundary);
boy.collide(rightBoundary);
boy.x = World.mouseX


 //Reiniciar o fundo
 if (path.y>400){
     path.y = path.height/20
 }



 drawSprites();

 }




