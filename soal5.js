// Class untuk Bola
class Bola {
    constructor(jariJari) {
      this.jariJari = jariJari;
    }
  
    volume() {
      return (4/3) * Math.PI * Math.pow(this.jariJari, 3);
    }
  
    luasPermukaan() {
      return 4 * Math.PI * Math.pow(this.jariJari, 2);
    }
  }
  
  // 30 cm
  const bola = new Bola(30);
  console.log("Bola");
  console.log("Volume Bola: " + bola.volume() + " cm³");
  console.log("Luas Permukaan Bola: " + bola.luasPermukaan() + " cm²");
  