var objekBiasa = {
    nama : "athafariz",
    umur:3,
    kota:"trenggalek",

}

console.log("sebelum dirubah ke JSON");
console.log(objekBiasa);

//ubah ke JSON
var jsondata = JSON.stringify(objekBiasa);
console.log("\n\nSetelah dirubah ke JSON menggunakan JSON.stringy\n");
console.log(jsondata);

//kembalikan ke objek biasa
var kembaliObjek = JSON.parse(jsondata);
console.log("\n\nUbah kembali ke objek biasa menggunakan JSON.parse\n")
console.log(kembaliObjek);
