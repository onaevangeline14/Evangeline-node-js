
class Kerucut {
    constructor(diameter, tinggi) {
      this.jariJari = diameter / 2;
      this.tinggi = tinggi;
    }
  
    // Menghitung panjang garis pelukis (s)
    garisPelukis() {
      return Math.sqrt(Math.pow(this.jariJari, 2) + Math.pow(this.tinggi, 2));
    }
  
    // Menghitung volume kerucut
    volume() {
      return (1/3) * Math.PI * Math.pow(this.jariJari, 2) * this.tinggi;
    }
  
    // Menghitung luas selimut kerucut
    luasSelimut() {
      const s = this.garisPelukis();
      return Math.PI * this.jariJari * s;
    }
  
    // Menghitung luas permukaan kerucut
    luasPermukaan() {
      const luasSelimut = this.luasSelimut();
      return luasSelimut + (Math.PI * Math.pow(this.jariJari, 2));
    }
  }
  
  // Contoh penggunaan dengan diameter 20 cm dan tinggi 40 cm
  const diameter = 20;
  const tinggi = 40;
  const kerucut = new Kerucut(diameter, tinggi);
  
  console.log("Kerucut");
  console.log("Tinggi Kerucut: " + tinggi + " cm");
  console.log("Luas Selimut Kerucut: " + kerucut.luasSelimut().toFixed(2) + " cm²");
  console.log("Volume Kerucut: " + kerucut.volume().toFixed(2) + " cm³");
  console.log("Luas Permukaan Kerucut: " + kerucut.luasPermukaan().toFixed(2) + " cm²");
  