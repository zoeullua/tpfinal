class Enemigos {
  constructor(){
    this.xe = [];
    this.ye = [];
    this.vel_e = 8;
  }
  
  configurar(){
    for (let i = 0; i < 7; i++){
      this.xe[i] = int( random(11) ) * 50;  // 11x50= 550; ubicacion random hasta ese num
      this.ye[i] = int( random(11) ) * 50;
    }}
  
  dibujar(){
   fill( 255, 0, 0);
   for ( let i = 0; i < 7; i++ ) {
    image (fotoenemigos, this.xe[i], this.ye[i], 50, 50); //
    this.xe[i] += this.vel_e;  // agrego velocidad
    if (this.xe[i] > width){
      this.xe[i] = 0;
    }}
  }
  
}
