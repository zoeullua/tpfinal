// TPFINAL. Zoe Ullua y Pilar Griffo
// Comision 3
// Legajo Zoe: 94705/3
// Av grafica: La Bella y la Bestia
// Minijuego: Frogger adaptado a llega a la Bestia


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
