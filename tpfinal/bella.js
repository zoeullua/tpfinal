class Bella {
  constructor(){
    this.posx = 400;
    this.posy = 570;
    this.pasos = 50;
  }
  
  dibujar() {
     // dibujo a bella
    fill(96, 185, 247);
    ellipse (this.posx, this.posy, 50,50);
    imageMode(CENTER);
    image(fotobella, this.posx, this.posy, 50,50);
  }
  
  keyPressed(){
     if (keyCode == UP_ARROW) {
      this.posy -= this.pasos;
    } else if (keyCode == DOWN_ARROW) {
      this.posy += this.pasos;
    } else if (keyCode == LEFT_ARROW) {
      this.posx -= this.pasos;
    } else if (keyCode == RIGHT_ARROW) {
      this.posx += this.pasos;}
  }
}
