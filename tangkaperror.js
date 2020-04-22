function dompet(isi){
    this.isi = isi;
}

function cekIsiDompet(isi){
    if (isi===undefined){
        try{
            throw new Error ('validasi dompet error, tidak bisa jika isi dompet 0');
        }catch(err){
            console.log(err.message);
            return false;
        }

    } else if(typeof isi ==='string'){
        try{
            throw new Error ('validasi dompet error, tidak bisa jika isi dompet 0');
        }catch(err){
            console.log(err.message);
            return false;
        }
    }
    return true;

}

var dompetku = new dompet('lll');
console.log(dompetku);
