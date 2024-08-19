
// Definisi variabel
let panjang = 20.5; // panjang tanah (meter)
let lebar = 30; // lebar tanah (meter)
let hargaPerMeter = 1500000; // harga per meter persegi
let ppn = 0.15; // PPN 15%

let luasTanah = panjang * lebar;

// Hitung harga tanah
let hargaTanah = luasTanah * hargaPerMeter;


let PPNamount = hargaTanah * ppn;


let hargaTanahTotal = hargaTanah + PPNamount;


console.log(`Luas tanah: ${luasTanah} m2`);
console.log(`Harga tanah sebelum PPN: Rp ${hargaTanah.toLocaleString()}`);
console.log(`PPN: Rp ${PPNamount.toLocaleString()}`);
console.log(`Harga tanah setelah PPN: Rp ${hargaTanahTotal.toLocaleString()}`);