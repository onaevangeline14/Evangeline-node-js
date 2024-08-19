// persegi

class persegi {
    constructor(sisi){
        this.sisi = sisi
        // kalau mau ngambil dari class induk pake 'super'
        // kalau mau ngambil nilai sendiri pake 'this'
    }

    luas = () => {
        return this.sisi * this.sisi
    }

    keliling = () => {
        return 4 * this.sisi
    }
}

// class kubus extends persegi{
//     l
// }

let kotak = new persegi(7)
console.log ("Luas persegi adalah: " + kotak.luas())
console.log ("Kelliling persegi adalah: " + kotak.keliling())