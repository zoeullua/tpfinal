class Fotos {
  constructor(){
  this.tam = 50;
  }
  
  estado2(){
  image(fotochip, 350, 30, this.tam, this.tam);
  image(fotobestia, 400, 30, this.tam, this.tam);
  }
  
  fondos(){
    imageMode(CORNER, CORNER);
    image(fondo, 0, 0, width, height);
  }
}
    
