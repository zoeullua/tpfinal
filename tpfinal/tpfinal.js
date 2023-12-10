//Tp final 
//Zoe Ullua, Pilar Griffo
//Comisión 3

let aventura


  function setup() {
  createCanvas(800,600);
  aventura = new Aventura ();
}


function draw() {
  aventura.actualizar();
}

function keyPressed(){
 aventura.juego.keyPressed(); 
}

function mousePressed(){
  aventura.juego.mousePressed();
}

function preload(){
  fotobella = loadImage("assets/fotobella.png");
  fotoenemigos = loadImage("assets/fotoenemigos.png");
  fotochip = loadImage("assets/fotochip.png");
  fotobestia = loadImage("assets/fotobestia.png");
  fotogaston = loadImage("assets/fotogaston.png");
  fondo = loadImage("assets/fondo1.jpg");
}
