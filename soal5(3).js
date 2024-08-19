// Class untuk Tabung
class Tabung {
    constructor(diameter, tinggi) {
      this.jariJari = diameter / 2;
      this.tinggi = tinggi;
    }
  
    // Menghitung volume tabung
    volume() {
      return Math.PI * Math.pow(this.jariJari, 2) * this.tinggi;
    }
  
    // Menghitung luas selimut tabung
    luasSelimut() {
      return 2 * Math.PI * this.jariJari * this.tinggi;
    }
  
    // Menghitung luas permukaan tabung
    luasPermukaan() {
      const luasAlas = Math.PI * Math.pow(this.jariJari, 2);
      const luasSelimut = this.luasSelimut();
      return 2 * luasAlas + luasSelimut;
    }
  }
  
  // Contoh penggunaan dengan diameter 15 cm dan tinggi 50 cm
  const diameter = 15;
  const tinggi = 50;
  const tabung = new Tabung(diameter, tinggi);
  
  console.log("Tabung Gelas");
  console.log("Volume Tabung: " + tabung.volume().toFixed(2) + " cm³");
  console.log("Luas Selimut Tabung: " + tabung.luasSelimut().toFixed(2) + " cm²");
  console.log("Luas Permukaan Tabung: " + tabung.luasPermukaan().toFixed(2) + " cm²");
  