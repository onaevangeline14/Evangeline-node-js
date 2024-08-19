// Fungsi untuk menghitung BMI dan menentukan status berat badan
function calculateBMI(heightCm, weightKg) {
    // Ubah tinggi dari cm ke meter
    var heightM = heightCm / 100;
    
    // Hitung BMI
    var bmi = weightKg / (heightM * heightM);
    
    // Tentukan kategori BMI
    var status = '';
    if (bmi < 18.5) {
        status = 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Obesitas';
    }
    
    // Tampilkan hasil
    console.log('BMI Rhodey adalah ' + bmi.toFixed(2) + ' - Status: ' + status);
}

// Contoh penggunaan
var heightCm = 170; // Tinggi badan dalam cm
var weightKg = 90;  // Berat badan dalam kg

calculateBMI(heightCm, weightKg);