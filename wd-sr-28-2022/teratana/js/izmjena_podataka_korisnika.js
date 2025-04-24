let firebaseUrl =
    "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";
let userId = getParamValue("id");

let userUrl = firebaseUrl + "/korisnici/" + userId + ".json";
console.log(userId);

function getParamValue(name) {

    let location = decodeURI(window.location.toString());
    let index = location.indexOf("?") + 1;
    let subs = location.substring(index, location.length);
    let splitted = subs.split("&");

    for (i = 0; i < splitted.length; i++) {
        let s = splitted[i].split("=");
        let pName = s[0];
        let pValue = s[1];
        if (pName == name) {
            return pValue;
        }
    }
}

let request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == 4) {

        if (this.status == 200) {
            //   console.log(this.responseText);
            let user = JSON.parse(this.responseText);

            console.log("--------------------------")
            console.log(user);
            console.log("--------------------------")
            const ime = document.getElementById("ime");
            const prezime = document.getElementById("prezime");
            const adresa = document.getElementById("adresa");
            const brojTelefona = document.getElementById("brojTelefona");
            const email = document.getElementById("email");
            const lozinka = document.getElementById("lozinka");
            const korisnickoIme = document.getElementById("korisnickoIme");
            const datumRodjenja = document.getElementById("datumRodjenja");
            ime.value = user.ime;
            prezime.value = user.prezime;
            adresa.value = user.adresa;
            email.value = user.email;
            brojTelefona.value = user.telefon;
            korisnickoIme.value = user.korisnickoIme;
            lozinka.value = user.lozinka;
            datumRodjenja.value = user.datumRodjenja;
        } else {
            alert("Greska prilikom dobavljanja podataka");
        }
    }
};
request.open("GET", userUrl);
request.send();
dodajValidacijuIme();
dodajValidacijuPrezime();
dodajValidacijuAdresa();
dodajValidacijuBrojTelefona();
dodajValidacijuEmail();
dodajValidacijuLozinka();
dodajValidacijuKorisnickoIme();
dodajValidacijuDatumRodjenja();


imeOk = true;
prezimeOk = true;
adresaOk = true;
brojTelefonaOk = true;
emailOk = true;
lozinkaOk = true;
datumRodjenjaOk = true;
korisnickoImeOk = true;
provjeriValidnaForma();
function validnaIzmjena() {
    return imeOk && prezimeOk && adresaOk && brojTelefonaOk && emailOk && lozinkaOk && datumRodjenjaOk && korisnickoImeOk;
}

function dodajValidacijuDatumRodjenja() {
    const datumRodjenja = document.getElementById("datumRodjenja");
    datumRodjenja.addEventListener("change", function () {
        const poruka = document.getElementById("datumRodjenjaGreskaPoruka");
        console.log(datumRodjenja.value);
        if (datumRodjenja.value === "") {
            poruka.innerText = "odaberite datum rodjenja";
            poruka.style.display = "block";
            datumRodjenjaOk = false;
        } else if (new Date(datumRodjenja.value) > new Date() || new Date(datumRodjenja.value) < new Date(1920, 1, 1)) {
            poruka.innerText = "odaberite datum rodjenja izmedju 1920 i danas";
            poruka.style.display = "block";
            datumRodjenjaOk = false;
        } else {
            poruka.style.display = "none";
            datumRodjenjaOk = true;
        }
        provjeriValidnaForma();
    });
}
function dodajValidacijuPrezime() {
    const prezime = document.getElementById("prezime");
    prezime.addEventListener("change", function () {
        const poruka = document.getElementById("prezimeGreskaPoruka");
        if (prezime.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            prezimeOk = false;
        } else if (prezime.value.length < 2) {
            poruka.innerText = "minimalno mora sadrzati 2 karaktera";
            poruka.style.display = "block";
            prezimeOk = false;

        } else {
            poruka.style.display = "none";
            prezimeOk = true;
        }
        provjeriValidnaForma();
    });
}

function dodajValidacijuIme() {
    const ime = document.getElementById("ime");
    ime.addEventListener("change", function () {
        const poruka = document.getElementById("imeGreskaPoruka");
        if (ime.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            imeOk = false;
        } else if (ime.value.length < 2) {
            poruka.innerText = "minimalno mora sadrzati 2 karaktera";
            poruka.style.display = "block";
            imeOk = false;
        } else {
            poruka.style.display = "none";
            imeOk = true;
        }
        provjeriValidnaForma();
    });
}

function validanEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
}
function dodajValidacijuBrojTelefona() {
    const brojTelefona = document.getElementById("brojTelefona");
    brojTelefona.addEventListener("change", function () {
        const poruka = document.getElementById("brojTelefonaGreskaPoruka");
        if (brojTelefona.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            brojTelefonaOk = false;
        } else if (brojTelefona.value.length < 8) {
            poruka.innerText = "minimalno mora sadrzati 8 karaktera";
            poruka.style.display = "block";
            brojTelefonaOk = false;

        } else {
            poruka.style.display = "none";
            brojTelefonaOk = true;
        }
        provjeriValidnaForma();
    });
}

function dodajValidacijuEmail() {
    const email = document.getElementById("email");
    email.addEventListener("change", function () {
        const poruka = document.getElementById("emailGreskaPoruka");
        if (!validanEmail(email.value)) {
            poruka.innerText = "neispravan email";
            poruka.style.display = "block";
            emailOk = false;
        } else {
            poruka.style.display = "none";
            emailOk = true;
        }
        provjeriValidnaForma();
    });
}

function dodajValidacijuKorisnickoIme() {
    const korisnickoIme = document.getElementById("korisnickoIme");
    korisnickoIme.addEventListener("change", function () {
        const poruka = document.getElementById("korisnickoImeGreskaPoruka");
        if (korisnickoIme.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            korisnickoImeOk = false;
        } else if (korisnickoIme.value.length < 2) {
            poruka.innerText = "minimalno mora sadrzati 2 karaktera";
            poruka.style.display = "block";
            korisnickoImeOk = false;

        } else {
            poruka.style.display = "none";
            korisnickoImeOk = true;
        }
        provjeriValidnaForma();
    });
}

function dodajValidacijuAdresa() {
    const adresa = document.getElementById("adresa");
    adresa.addEventListener("change", function () {
        const poruka = document.getElementById("adresaGreskaPoruka");
        if (adresa.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            adresaOk = false;
        } else if (adresa.value.length < 2) {
            poruka.innerText = "minimalno mora sadrzati 2 karaktera";
            poruka.style.display = "block";
            adresaOk = false;

        } else {
            poruka.style.display = "none";
            adresaOk = true;
        }
        provjeriValidnaForma();
    });
}

function dodajValidacijuLozinka() {
    const lozinka = document.getElementById("lozinka");
    lozinka.addEventListener("change", function () {
        const poruka = document.getElementById("lozinkaGreskaPoruka");
        if (lozinka.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            lozinkaOk = false;
        } else if (lozinka.value.length < 6) {
            poruka.innerText = "minimalno mora sadrzati 6 karaktera";
            poruka.style.display = "block";

            lozinkaOk = false;
        } else {
            poruka.style.display = "none";

            lozinkaOk = true;
        }
        provjeriValidnaForma();
    });
}

function provjeriValidnaForma() {
    let btn = document.getElementById("sacuvajPromjene");
    if (validnaIzmjena()) {

        btn.disabled = false;
    } else {

        btn.disabled = true;
    }
}
function sacuvajPromjenu() {
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let adresa = document.getElementById("adresa").value;
    let brojTelefona = document.getElementById("brojTelefona").value;
    let email = document.getElementById("email").value;
    let lozinka = document.getElementById("lozinka").value;
    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let datumRodjenja = document.getElementById("datumRodjenja").value;
    let userId=getParamValue("id");
    let korisnik={};
    korisnik.ime=ime;
    korisnik.datumRodjenja=datumRodjenja;
    korisnik.email=email;
    korisnik.adresa=adresa;
    korisnik.lozinka=lozinka;
    korisnik.prezime=prezime;
    korisnik.telefon=brojTelefona;
    korisnik.korisnickoIme=korisnickoIme;
    // console.log(userId)
    let putRequest = new XMLHttpRequest();

    putRequest.onreadystatechange = function (e) {
        if (this.readyState == 4) {
            if (this.status == 200) {
                window.location.href = "admin_korisnici.html";
            } else {
                alert("Greška prilikom izmene");
            }
        }
    };

    putRequest.open("PUT", firebaseUrl + "/korisnici/" +userId+ ".json");
    putRequest.send(JSON.stringify(korisnik));




}
