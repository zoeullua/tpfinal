class Aventura {

  constructor() {
    this.pantalla = 0;
    this.cant = 14;
    this.imagenes = [];
    
    this.juego = new Juego();  // juego q iria en la pantalla 14
    this.textos = loadStrings("data/textos.txt");

    for (this.i = 0; this.i < this.cant; this.i++) {
      this.imagenes[this.i] = loadImage("data/" + this.i + ".jpg", img => {
        img.resize(600, 600);
        this.imagenes[this.i] = img;
      }
      );
    }

    this.botonInicio = new Boton (200, 20, 100, 50, 2, "Empezar", 275, this);
    this.botonRescatar = new Boton (30, 350, 130, 50, 4, "Ir a rescatarlo ", 55, this);
    this.botonEsperar = new Boton (350, 350, 130, 50, 3, "Esperar que la policía se encargue", 475, this);
    this.botonEscapar = new Boton (30, 350, 130, 50, 5, "Intentar escapar con tu padre", 55, this); //opcion 2
    this.botonQuedarse = new Boton (350, 350, 130, 50, 6, "Quedarte y aceptar el trato", 55, this);
    this.botonContinuar = new Boton (200, 20, 46, 46, 7, "Continuar", 417, this);
    this.botonContinuar2 = new Boton (200, 20, 46, 46, 8, "Continuar", 417, this);
    this.botonContinuar3 = new Boton (200, 20, 46, 46, 9, "Continuar", 417, this);
    this.botonSalir = new Boton (30, 350, 130, 50, 9, "Intentar detenerlos", 55, this);
    this.botonTrabar = new Boton (350, 350, 130, 50, 14, "Advertir a la bestia", 475, this); // lleva al juego
    this.botonReiniciar = new Boton (200, 20, 130, 50, 0, "Reiniciar", 475, this);//opcion 1
    this.botonObservar = new Boton (30, 350, 130, 50, 11, "Observar la victoria de la bestia", 55, this);
    this.botonTraicionar = new Boton (350, 350, 130, 50, 12, "Traicionar a la bestia", 475, this);
    this.botonCreditos = new Boton (200, 20, 130, 50, 13, "Créditos", 55, this);
  }

  actualizar() {
    background(255);
    this.estados();
    //console.log (this.estados);
  }
  
// logica de estados
  estados() {
    console.log(this.pantalla);
    
    fill(0);
    textSize(20);
    imageMode(CORNER);
    image(this.imagenes[this.pantalla], 0, 0);
    //console.log(this.imagenes[this.pantalla])
      fill(250);
    rect(0, 400, 600, 200);

//pantalla 0 -------------------------------------------------
    if (this.pantalla === 0) {

      fill(250);
      this.botonInicio.dibujar();

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 200);
      
//pantalla 2 ------------------------------------------------
    } else if (this.pantalla === 2) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 200);

      fill(250);
      this.botonRescatar.dibujar();
      this.botonEsperar.dibujar();
//pantalla 3 ----------------------------------------------  // AGREGADO !! ACA
    } else if (this.pantalla === 3) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonReiniciar.dibujar();
      
//pantalla 4 ----------------------------------------------  // HASTA ACA
    } else if (this.pantalla === 4) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonEscapar.dibujar();
      this.botonQuedarse.dibujar();
//pantalla 5 ----------------------------------------------
    } else if (this.pantalla === 5) {

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonReiniciar.dibujar();
// pantalla 6 ---------------------------------------------
    } else if (this.pantalla === 6) {

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);
      fill(250);
      this.botonContinuar.dibujar()
// pantalla 7 ---------------------------------------------
    } else if (this.pantalla == 7) {

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonContinuar2.dibujar()
// pantalla 8 ---------------------------------------------
    } else if (this.pantalla == 8) {

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonSalir.dibujar();
      this.botonTrabar.dibujar();
// pantalla 9 ---------------------------------------------
    } else if (this.pantalla === 9) {

      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);

      fill(250);
      this.botonReiniciar.dibujar();
      
    }
// pantalla 10 ---------------------------------------------
    else if (this.pantalla === 10) {
      fill(0);
      textAlign(LEFT, CORNER);
      text(this.textos[this.pantalla], 30, 430, 550, 250);
      fill(250);
      this.botonObservar.dibujar();
      this.botonTraicionar.dibujar();
      this.juego.estado = 1;
    }
// pantalla 11 ---------------------------------------------
    else if (this.pantalla === 11) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);
      fill(250);
      this.botonCreditos.dibujar();
    }
// pantalla 12 ---------------------------------------------
    else if (this.pantalla === 12) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);
      fill(250);
      this.botonReiniciar.dibujar();
    }
// pantalla 13 ---------------------------------------------
    else if (this.pantalla === 13) {
      fill(0);
      text(this.textos[this.pantalla], 30, 430, 550, 250);
      fill(250);
      this.botonReiniciar.dibujar();
    }
// pantalla 14 ---------------------------------------------
   else if (this.pantalla === 14) {
     this.juego.actualizar();
     if (this.juego.estado === 3) {
       this.pantalla = 10;
  }
   }
  }

} // fin de aventura
