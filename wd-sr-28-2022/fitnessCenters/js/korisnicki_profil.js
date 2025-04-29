let firebaseUrl =
"https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";
let userId = getParamValue("id");
let userUrl = firebaseUrl+"/korisnici/"+userId+".json";
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
       
        console.log("----------------------------")
        console.log(user);
        console.log("----------------------------")
        const imePrezime = document.getElementById("imePrezime");
        const adresa = document.getElementById("adresa");
        const brojTelefona = document.getElementById("brojTelefona");
        const email = document.getElementById("email");
        const datumRodjenja = document.getElementById("datumRodjenja");
        imePrezime.innerText = user.ime + " " + user.prezime;
        adresa.innerText = user.adresa;
        email.innerText = user.email;
        brojTelefona.innerText = user.telefon;
        
        datumRodjenja.innerText = user.datumRodjenja;
        } else {
          alert("Greska prilikom dobavljanja podataka");
        }
      }
    };
request.open("GET", userUrl);
request.send();