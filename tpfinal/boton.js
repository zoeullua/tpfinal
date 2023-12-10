class Boton {
  constructor(x, y, ancho, alto, sig, texto, posX, instancia) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.sig = sig;
    this.texto = texto;
    this.posX = posX;
    this.aventura = instancia;

    this.clickeado = false; 
    this.tiempo = 0;
  }

  actualizar() {
    

    if (this.tiempo < 60) {
      this.tiempo ++;
      this.clickeado = false;
    }
    if (this.tiempo >= 60) {
      this.clickeado = true;
    }
    if (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.alto) {
      if (mouseIsPressed && this.clickeado == true && this.tiempo >= 60) {
        this.aventura.pantalla = this.sig;
        this.clickeado = false; 
        this.tiempo = 0;
      }
    }
  }

  dibujar() {
    this.actualizar();
    
    push();
    rect(this.x, this.y, this.ancho + 100, this.alto + 10);
    fill(0);
    textSize(14);
    const textoX = this.x + this.ancho / 2 - textWidth(this.texto) / 2 + 50;
    const textoY = this.y + this.alto / 2 + textSize() / 3;
    text(this.texto, textoX, textoY);
    pop();
  }
}
