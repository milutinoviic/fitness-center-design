let firebaseUrl =
    "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";
let gymId = getParamValue("id");
let gymUrl = firebaseUrl + "/fitnesCentri/" + gymId + ".json";
console.log(gymId);

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
            let gym = JSON.parse(this.responseText);


            console.log(gym);
            const naziv = document.getElementById("naziv");
            const adresa = document.getElementById("adresa");
            const mjesecnaClanarina = document.getElementById("mjesecnaClanarina");
            const godinaOtvaranja = document.getElementById("godinaOtvaranja");

            naziv.value = gym.naziv;
            adresa.value = gym.adresa;
            mjesecnaClanarina.value = gym.mesecnaClanarina;
            godinaOtvaranja.value = gym.godinaOtvaranja;
            dodajValidacijuAdresa();
            dodajValidacijuClanarina();
            dodajValidacijuGodinaOtvaranja();
            dodajValidacijuNaziv();

        } else {
            alert("Greska prilikom dobavljanja podataka");
        }
    }
};

request.open("GET", gymUrl);
request.send();

nazivOk = true;
adresaOk = true;
godinaOtvaranjaOk = true;
clanarinaOk = true;
provjeriValidnost();
function dodajValidacijuNaziv() {
    const naziv = document.getElementById("naziv");
    naziv.addEventListener("change", function () {
        const poruka = document.getElementById("nazivGreskaPoruka");
        console.log(godinaOtvaranja.value);
        if (naziv.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            nazivOk = false;
        } else if (naziv.value.length < 2) {
            poruka.innerText = "minimalno mora sadrzati 2 karaktera";
            poruka.style.display = "block";
            nazivOk = false;

        } else {
            poruka.style.display = "none";
            nazivOk = true;
        }
        provjeriValidnost();
    });
}

function dodajValidacijuAdresa() {
    const adresa = document.getElementById("adresa");
    adresa.addEventListener("change", function () {
        const poruka = document.getElementById("adresaGreskaPoruka");
        console.log(godinaOtvaranja.value);
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
        provjeriValidnost();
    });
}

function dodajValidacijuClanarina() {
    const clanarina = document.getElementById("mjesecnaClanarina");
    clanarina.addEventListener("change", function () {
        const poruka = document.getElementById("clanarinaGreskaPoruka");

        if (clanarina.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            clanarinaOk = false;
        } else if (isNaN(Number(clanarina.value))) {
            poruka.innerText = "vrijednost mora biti broj";
            poruka.style.display = "block";
            clanarinaOk = false;

        } else if (Number(clanarina.value) < 0) {
            poruka.innerText = "minimalna vrijednost je 0";
            poruka.style.display = "block";
            clanarinaOk = false;

        } else {
            poruka.style.display = "none";
            clanarinaOk = true;
        }
        provjeriValidnost();
    });
}

function dodajValidacijuGodinaOtvaranja() {
    const godinaOtvaranja = document.getElementById("godinaOtvaranja");
    godinaOtvaranja.addEventListener("change", function () {
        const poruka = document.getElementById("godinaOtvaranjaGreskaPoruka");
        console.log(godinaOtvaranja.value);
        if (godinaOtvaranja.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            godinaOtvaranjaOk = false;
        } else if (isNaN(Number(godinaOtvaranja.value))) {
            poruka.innerText = "vrijednost mora biti broj";
            poruka.style.display = "block";
            godinaOtvaranjaOk = false;

        } else if (Number(godinaOtvaranja.value) < 1868) {
            poruka.innerText = "minimalna vrijednost je 1868";
            poruka.style.display = "block";
            godinaOtvaranjaOk = false;

        } else if (Number(godinaOtvaranja.value) > new Date().getFullYear()) {
            poruka.innerText = "maksimalna vrijednost je " + new Date().getFullYear();
            poruka.style.display = "block";
            godinaOtvaranjaOk = false;

        } else {
            poruka.style.display = "none";
            godinaOtvaranjaOk = true;
        }
        provjeriValidnost();
    });
}

function validnaForma() {

    return nazivOk && adresaOk && godinaOtvaranjaOk && clanarinaOk;
}

function provjeriValidnost() {
    let sacuvajPromjene = document.getElementById("sacuvajPromjene");

    if (validnaForma()) {
        sacuvajPromjene.disabled = false;
    } else {
        sacuvajPromjene.disabled = true;
    }
}
function sacuvajPromjenu() {
    let naziv = document.getElementById("naziv").value;
    let adresa = document.getElementById("adresa").value;
    let mjesecnaClanarinaa = document.getElementById("mjesecnaClanarina").value;
    let godinaOtvaranja = document.getElementById("godinaOtvaranja").value;

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (this.readyState == 4) {

            if (this.status == 200) {
                //   console.log(this.responseText);
                let gym = JSON.parse(this.responseText);


                

                let teretana = {};
                teretana.godinaOtvaranja = godinaOtvaranja;
                teretana.naziv = naziv;
                teretana.adresa = adresa;
                teretana.mesecnaClanarina = mjesecnaClanarinaa;
                teretana.ocene = gym.ocene;
                teretana.idTreninga = gym.idTreninga;
                teretana.prosecnaOcena = gym.prosecnaOcena;
                teretana.slika = gym.slika;
                teretana.brojDostupnihTreninga = gym.brojDostupnihTreninga;
                console.log(teretana);
                let gymId = getParamValue("id")
                let putRequest = new XMLHttpRequest();

                putRequest.onreadystatechange = function (e) {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            window.location.href = "admin_fitness_centri.html";
                        } else {
                            alert("Greška prilikom izmjene");
                        }
                    }
                };

                putRequest.open("PUT", firebaseUrl + "/fitnesCentri/" + gymId + ".json");
                putRequest.send(JSON.stringify(teretana));

            } else {
                alert("Greska prilikom dobavljanja podataka");
            }
        }
    };

    request.open("GET", gymUrl);
    request.send();
    // console.log(naziv);
    // console.log(adresa);







}

