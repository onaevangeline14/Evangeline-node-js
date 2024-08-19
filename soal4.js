// Inisialisasi nilai
const sukuPertama = 4;
const rasio = 3;
const jumlahSuku = 10;


let jumlahDeret = 0;

// Menghitung jumlah 10 suku pertama menggunakan perulangan
let sukuSekarang = sukuPertama;
for (let i = 0; i < jumlahSuku; i++) {
    jumlahDeret += sukuSekarang;
    sukuSekarang *= rasio;
}

// Menampilkan hasil
console.log("Jumlah 10 suku pertama dari deret geometri adalah:", jumlahDeret);