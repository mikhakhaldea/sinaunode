function jum(a,b){
    return a+b;
}

let result = jum(4,3);
console.log('hasilnya adalah : '+ result);

// parameter menggunakan fungsi lain

function tampilPesan(dari,isi = test()){
    console.log(dari + ' : ' + isi);
}

function test(){
    return 'assalamualaikum';
}

tampilPesan('athafariz');

//function callback

function salam(nama){
    console.log('Asslamualaikum ' + nama);
}
function inputan(callback){
    var nama = 'athafariz';
callback(nama);
}
inputan(salam);

//arrow function

let persen = (c,d) => c-((d/100)*c);
console.log(persen(1000,10));

//contoh fungsi anonymous

var x = function(e,f){
    return e*f;
}
console.log(x(8,6));

//constructor fungsi

function UserLogin(nama,password){
    this.nama = nama;
    this.password = password;
}

const user = new UserLogin('athafariz','Bismillah');

console.log(user);
console.log(user.nama);
console.log(user.password);

//function as expression

function penjumlahan(aa,bb){
    return aa + bb;
}

var xx = penjumlahan(2,6)*2;
console.log(xx);


//nested function / fungsi bersarang

function masukkan(){
    var hitung = 0;
    function tambah(){
        hitung +=1;
    }
    tambah()
    return hitung
}
console.log(masukkan());

//argumen object fungsi dengan banyak parameter

function jumlahTotal(){
    var i;
    var jumtot = 0;
    for (i=0;i<arguments.length;i++){
        jumtot +=arguments[i];
    }
    return jumtot
}

console.log(jumlahTotal(11,23,78,52));

// penjelasan this keyword

function akun(username,pass){
    this.username = username;
    this.pass = pass;
    this.captcha = 9909;
}

let akunku = new akun('athafariz@gmail.com','bismillah');
console.log(akunku);
console.log(typeof akunku);
console.log(akunku.captcha);

//call & aplly function

var orang = {
    namaLengkap : function(){
        return this.namaDepan + ' ' + this.namaBelakang; 
    }
};

var orang1 = {
    namaDepan : 'Athafariz',
    namaBelakang : 'Prasetiyo'
};

var xy = orang.namaLengkap.call(orang1);
console.log(xy);

function namaProduk(namaP,harga){
    this.namaP = namaP;
    this.harga = harga;
}

function makanan(namaP,harga){
    namaProduk.call(this,namaP,harga);
    this.kategori = 'makanan'
}

var xn = new makanan('kacang',1500);
console.log(xn.namaP);
console.log(xn.harga);
console.log(xn.kategori);
