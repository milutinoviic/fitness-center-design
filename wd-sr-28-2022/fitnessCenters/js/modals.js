function ubaciLoginModal() {
    let div = document.createElement('div');
    div.innerHTML = `<div class="modal fade" id="prijavaModal" tabindex="-1" aria-labelledby="prijavaModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content ">
        <div class="modal-header ">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ">
          <div class="container-fluid text-center">
            <div class="row">
            <div class="col-md-4 mb-3">
                <div>
                    <label>Email</label>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <input type="email" id="emailPrijava"  class="form-control" >
                    <p class='porukaGreska' id="prijavaEmailGreskaPoruka" style="display:none" ></p>

                </div>
            </div>
        </div>    
        <div class="row">
            <div class="col-md-4 mb-3">
                <div>
                    <label>Lozinka</label>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <input type="password" id="lozinkaPrijava"  class="form-control" >
                    <p class='porukaGreska' id="prijavaLozinkaGreskaPoruka" style="display:none" ></p>

                </div>
            </div>
        </div> 

            <div class="row">
              <div class="col ">
                <button type="submit" id="prijaviSe" class="btn btn-success" onclick="identifikacijaKorisnika()" >Prijavi se</button>
              </div>
            </div>



          </div>



        </div>

      </div>
    </div>
  </div>`;
    let modals = document.getElementById("modals");
    modals.append(div);

}


function ubaciRegistracijaModal() {
    let div = document.createElement('div');
    div.innerHTML = ` <div class="modal fade" id="registracijaModal" tabindex="-1" aria-labelledby="registracijaModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content ">
        <div class="modal-header ">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ">
          <div class="container-fluid text-center">
            <div class="row">
              <div class="col-md-4 mb-3">
                  <div>
                      <label >Ime</label>
                  </div>
              </div>
              <div class="col-md-6 mb-3">
                  <div>
                      <input type="text" id="registracijaIme" class="form-control" >
                      <p class='porukaGreska' id="registracijaImeGreskaPoruka" style="display:none" ></p>

                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4 mb-3">
                  <div>
                      <label>Prezime</label>
                  </div>
              </div>
              <div class="col-md-6 mb-3">
                  <div>
                      <input type="text" id="registracijaPrezime" class="form-control"  >
                      <p class='porukaGreska' id="registracijaPrezimeGreskaPoruka" style="display:none" ></p>

                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-md-4 mb-3">
                  <div>
                      <label>Korisnicko ime</label>
                  </div>
              </div>
              <div class="col-md-6 mb-3">
                  <div>
                      <input type="text" id="registracijaKorisnickoIme" class="form-control"  >
                      <p class='porukaGreska' id="registracijaKorisnickoImeGreskaPoruka" style="display:none" ></p>

                  </div>
              </div>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
                <div>
                    <label>Email</label>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <input type="email" id="registracijaEmail"  class="form-control" >
                    <p class='porukaGreska' id="registracijaEmailGreskaPoruka" style="display:none" ></p>

                </div>
            </div>
        </div>    
        <div class="row">
            <div class="col-md-4 mb-3">
                <div>
                    <label>Lozinka</label>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <input type="password" id="registracijaLozinka"  class="form-control" >
                    <p class='porukaGreska' id="registracijaLozinkaGreskaPoruka" style="display:none" ></p>

                </div>
            </div>
        </div> 

          <div class="row">
            <div class="col-md-4 mb-3">
                <div>
                    <label >Datum rodjenja</label>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div>
                    <input type="date" id="registracijaDatumRodjenja" class="form-control" >
                    <p class='porukaGreska' id="registracijaDatumRodjenjaGreskaPoruka" style="display:none" ></p>

                </div>
            </div>
        </div>

          <div class="row">
              <div class="col-md-4 mb-3">
                  <div>
                      <label>Adresa</label>
                  </div>
              </div>
              <div class="col-md-6 mb-3">
                  <div>
                      <input type="text"  id="registracijaAdresa" class="form-control"    >
                      <p class='porukaGreska' id="registracijaAdresaGreskaPoruka" style="display:none" ></p>

                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-md-4 mb-3">
                  <div>
                      <label>Broj telefona</label>
                  </div>
              </div>
              <div class="col-md-6 mb-3">
                  <div>
                      <input type="text" id="registracijaBrojTelefona" class="form-control" >
                      <p class='porukaGreska' id="registracijaBrojTelefonaGreskaPoruka" style="display:none" ></p>

                  </div>
              </div>
          </div>
          

                    
         <div>
              <button   id="kreirajNalog" type="submit" class="btn btn-success" onclick="dodajKorisnika()"  >Kreiraj nalog</button>
          </div>
          </div>

        </div>

      </div>
    </div>
  </div>`;

    let modals = document.getElementById("modals");
    modals.append(div);


}
let imeOk = false;
let prezimeOk = false;
let adresaOk = false;
let brojTelefonaOk = false;
let emailOk = false;
let lozinkaOk = false;
let datumRodjenjaOk = false;
let korisnickoImeOk = false;
ubaciLoginModal();
ubaciRegistracijaModal();

function validnaRegistracija() {
    return imeOk && prezimeOk && adresaOk && brojTelefonaOk && emailOk && lozinkaOk && datumRodjenjaOk && korisnickoImeOk;
}

function dodajValidacijuRegistraciju() {
    let kreirajNalog = document.getElementById("kreirajNalog");
    kreirajNalog.disabled = true;
    dodajValidacijuIme();
    dodajValidacijuPrezime();
    dodajValidacijuAdresa();
    dodajValidacijuBrojTelefona();
    dodajValidacijuEmail();
    dodajValidacijuLozinka();
    dodajValidacijuDatumRodjenja();

    dodajValidacijuKorisnickoIme();
}

function dodajValidacijuPrijava() {
    dodajValidacijuPrijavaEmail();
    dodajValidacijuPrijavaLozinka();
}
dodajValidacijuPrijava();

prijavaEmailOk = false;
prijavaLozinkaOk = false;
provjeraPrijava();
function dodajValidacijuPrijavaEmail() {
    const email = document.getElementById("emailPrijava");
    email.addEventListener("change", function () {
        const poruka = document.getElementById("prijavaEmailGreskaPoruka");
        if (!validanEmail(email.value)) {
            poruka.innerText = "neispravan email";
            poruka.style.display = "block";
            prijavaEmailOk = false;
        } else {
            poruka.style.display = "none";
            prijavaEmailOk = true;
        }
        provjeraPrijava();
    });
}

function dodajValidacijuPrijavaLozinka() {
    const lozinka = document.getElementById("lozinkaPrijava");
    lozinka.addEventListener("change", function () {
        const poruka = document.getElementById("prijavaLozinkaGreskaPoruka");
        if (lozinka.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            prijavaLozinkaOk = false;
        } else if (lozinka.value.length < 6) {
            poruka.innerText = "minimalno mora sadrzati 6 karaktera";
            poruka.style.display = "block";
            prijavaLozinkaOk = false;

        } else {
            poruka.style.display = "none";
            prijavaLozinkaOk = true;
        }
        provjeraPrijava();
    });
}

function validnaPrijava() {
    return prijavaLozinkaOk && prijavaEmailOk;
}

function provjeraPrijava() {
    let prijaviSe = document.getElementById("prijaviSe");
    if (validnaPrijava()) {
        prijaviSe.disabled = false;
    } else {
        prijaviSe.disabled = true;
    }
}

function dodajValidacijuDatumRodjenja() {
    const datumRodjenja = document.getElementById("registracijaDatumRodjenja");
    datumRodjenja.addEventListener("change", function () {
        const poruka = document.getElementById("registracijaDatumRodjenjaGreskaPoruka");
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
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    });
}

function dodajValidacijuIme() {
    const ime = document.getElementById("registracijaIme");
    ime.onchange = function () {
        console.log(ime.value);
        // <p class='porukaGreska' id="registracijaPrezimeGreskaPoruka" style="display:none" ></p>
        const poruka = document.getElementById("registracijaImeGreskaPoruka");
        if (ime.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            imeOk = false;
        } else if (ime.value.length < 2) {
            poruka.innerText = "minimalno je 2 karaktera";
            poruka.style.display = "block";
            imeOk = false;
        } else {
            poruka.innerText = "";
            poruka.style.display = "none";
            imeOk = true;
        }
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    }
}

function dodajValidacijuKorisnickoIme() {
    const korisnickoIme = document.getElementById("registracijaKorisnickoIme");
    korisnickoIme.addEventListener("change", function () {
        const poruka = document.getElementById("registracijaKorisnickoImeGreskaPoruka");
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
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    });
}

function dodajValidacijuPrezime() {
    const prezime = document.getElementById("registracijaPrezime");
    prezime.onchange = function () {

        // <p class='porukaGreska' id="registracijaPrezimeGreskaPoruka" style="display:none" ></p>
        const poruka = document.getElementById("registracijaPrezimeGreskaPoruka");
        if (prezime.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            prezimeOk = false;
        } else if (prezime.value.length < 2) {
            poruka.innerText = "minimalno je 2 karaktera";
            poruka.style.display = "block";
            prezimeOk = false;
        } else {
            poruka.innerText = "";
            poruka.style.display = "none";
            prezimeOk = true;
        }

        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    }
}

function dodajValidacijuAdresa() {
    const adresa = document.getElementById("registracijaAdresa");
    adresa.onchange = function () {

        // <p class='porukaGreska' id="registracijaPrezimeGreskaPoruka" style="display:none" ></p>
        const poruka = document.getElementById("registracijaAdresaGreskaPoruka");
        if (adresa.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            adresaOk = false;
        } else if (adresa.value.length < 2) {
            poruka.innerText = "minimalno je 2 karaktera";
            poruka.style.display = "block";
            adresaOk = false;
        } else {
            poruka.innerText = "";
            poruka.style.display = "none";
            adresaOk = true;
        }
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    }
}

function dodajValidacijuBrojTelefona() {
    const brojTelefona = document.getElementById("registracijaBrojTelefona");
    brojTelefona.onchange = function () {

        // <p class='porukaGreska' id="registracijaPrezimeGreskaPoruka" style="display:none" ></p>
        const poruka = document.getElementById("registracijaBrojTelefonaGreskaPoruka");
        if (brojTelefona.value === "") {
            poruka.innerText = "polje ne moze biti prazno";
            poruka.style.display = "block";
            brojTelefonaOk = false;
        } else if (brojTelefona.value.length < 8) {
            poruka.innerText = "minimalno je 8 karaktera";
            poruka.style.display = "block";
            brojTelefonaOk = false;
        } else {
            poruka.innerText = "";
            poruka.style.display = "none";
            brojTelefonaOk = true;
        }
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    }
}
dodajValidacijuRegistraciju();




function validanEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
}


function dodajValidacijuEmail() {
    const email = document.getElementById("registracijaEmail");
    email.addEventListener("change", function () {
        const poruka = document.getElementById("registracijaEmailGreskaPoruka");
        if (!validanEmail(email.value)) {
            poruka.innerText = "neispravan email";
            poruka.style.display = "block";
            emailOk = false;
        } else {
            poruka.style.display = "none";
            emailOk = true;
        }
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    });
}



function dodajValidacijuLozinka() {
    const lozinka = document.getElementById("registracijaLozinka");
    lozinka.addEventListener("change", function () {
        const poruka = document.getElementById("registracijaLozinkaGreskaPoruka");
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
        if (validnaRegistracija()) {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = false;
        } else {
            let kreirajNalog = document.getElementById("kreirajNalog");
            kreirajNalog.disabled = true;
        }
    });
}
function dodajKorisnika() {

    if (!validnaRegistracija()) {
        return;
    }
    let ime1 = document.getElementById("registracijaIme").value;
    let prezime1 = document.getElementById("registracijaPrezime").value;
    let k_Ime = document.getElementById("registracijaKorisnickoIme").value;
    let email1 = document.getElementById("registracijaEmail").value;
    let lozinka1 = document.getElementById("registracijaLozinka").value;
    let datumR = document.getElementById("registracijaDatumRodjenja").value;
    let adresa = document.getElementById("registracijaAdresa").value;
    let brTelefon = document.getElementById("registracijaBrojTelefona").value;
    // console.log(ime1)
    // console.log(prezime1)
    // console.log(k_Ime)
    // console.log(email1)
    let korisnik = {};
    korisnik.ime = ime1;
    korisnik.datumRodjenja = datumR;
    korisnik.email = email1;
    korisnik.adresa = adresa;
    korisnik.lozinka = lozinka1;
    korisnik.prezime = prezime1;
    korisnik.telefon = brTelefon;
    korisnik.korisnickoIme = k_Ime;

    console.log(korisnik);
    let putRequest = new XMLHttpRequest();

    putRequest.onreadystatechange = function (e) {
        if (this.readyState == 4) {
            if (this.status == 200) {
                window.location.href = "admin_korisnici.html";
                console.log("krreiran korisnik");
            } else {
                alert("Greška prilikom upisa korisnika.");
            }
        }
    };

    putRequest.open("POST", "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com/korisnici.json");
    putRequest.send(JSON.stringify(korisnik));




}

function identifikacijaKorisnika() {
    emailKorisnika = document.getElementById("emailPrijava").value
    sifraKorisnika = document.getElementById("lozinkaPrijava").value
    // console.log(emailKorisnika)
    // console.log(sifraKorisnika)


    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (this.readyState == 4) {

            if (this.status == 200) {

                let kor = JSON.parse(this.responseText);


                for (let id in kor) {
                    let k1 = kor[id];
                    if (k1.email == emailKorisnika && k1.lozinka == sifraKorisnika) {
                        alert("Uspjesno ste se prijavili")
                        return
                        

                    }
                    
                    
                    


                }
                alert("Niste se dobro prijavili")
                return


            } else {
                console.log("greskaaaaa 123456")
                alert("Greska prilikom dobavavljanja podataka")
            }
        }
    };
    request.open("GET", "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com/korisnici.json", true);
    request.send();


}
