//obyek biasa
var anak = {namaDepan:'Athafariz',namaBelakang:'Prasetiyo',umur:2.5,rambut:'hitam'};
console.log(anak);
//obyek dengan fungsi
var anakmod = {namaDepan:'Athafariz',namaBelakang:'Prasetiyo',umur:2.5,rambut:'hitam',namalengkap:function(){console.log('athafariz rifqie adnan prasetiyo')}};
anakmod.namalengkap();

//obyek jg tapi tidak disarankan
var orang = new Object()
orang.namadepan = 'athafariz';
orang.namabelakang = 'prasetiyo';
orang.umur = 3;
orang.rambut = 'hitam';
console.log(orang);

//membuat obyek yg benar

function Orang(namadepan,namabelakang,umur,warnamata){
    this.namadepan = namadepan;
    this.namabelakang = namabelakang;
    this.umur = umur;
    this.warnamata = warnamata;
}

//untuk menambah properti /overiding fungsi diatas bisa dengan syntax prototype
Orang.prototype.keahlian = "Komputer";

var fariz = new Orang("Athafariz","Prasetiyo",4,"hitam");
console.log(fariz);
console.log(fariz.keahlian);

//melihat properti/key di obyek

var x;
console.log('\nisi properti / key di objek instance orang\n')
for (x in fariz){
    console.log(x)
}

console.log('\nmendapatkan isi key dari objek \n')

var y;
for(y in fariz){
    console.log(fariz[y]);
}