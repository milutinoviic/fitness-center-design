let treningId = getParamValue("id");
console.log("trening id "+treningId);
let firebaseUrl =
  "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";

let treningUrl = firebaseUrl + "/treninzi/"+treningId+".json";
let request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == 4) {
        
        if (this.status == 200) {
        //   console.log(this.responseText);
        let trening = JSON.parse(this.responseText);
        // console.log(gyms);
        console.log(trening);
        dodaj_trening(trening);
        
          
        } else {
          alert("Greska prilikom dobavljanja podataka");
        }
      }
    };
request.open("GET", treningUrl,true);
request.send();

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



function dodaj_trening(trening){
    let h1 = document.createElement('h1');
    h1.classList.add('rata');
    h1.innerHTML = trening.naziv;;
    h1.style.textAlign = 'center';

    let mainDiv = document.createElement('div');
    mainDiv.align = 'center';
    // kreiraj div za sliku
    let imageDiv = document.createElement('div');
    imageDiv.style.textAlign = 'center';
    let image = document.createElement('img');
    image.src = 'images/indi.jpg';
    image.classList.add('card-img-top');
    image.style.width = '600px';
    image.style.height = '550px';
    // kreiraj div za tekst
    let textDiv = document.createElement('div');
    textDiv.classList.add('card-body');
    let textP = document.createElement('p');
    textP.classList.add('card-text');
    textP.innerHTML =  trening.kratakOpis;

    // kreiraj listu sa detaljima
    let list = document.createElement('ul');
    list.classList.add('list-group', 'list-group-flush');
    let listItem1 = document.createElement('li');
    listItem1.classList.add('list-group-item');
    listItem1.innerHTML = '<b align="left">Tip treninga</b> '+trening.zanr;
    let listItem2 = document.createElement('li');
    listItem2.classList.add('list-group-item');
    listItem2.innerHTML = '<b>Maksimalan broj osoba</b> '+trening.maxOsobe;
    let listItem3 = document.createElement('li');
    listItem3.classList.add('list-group-item');
    listItem3.innerHTML = '<b>Trajanje</b> '+trening.trajanje;


    // kreiraj div za dodatni tekst
    let extraTextDiv = document.createElement('div');
    extraTextDiv.classList.add('card-text');
    let extraText = document.createElement('p');
    extraText.innerHTML = trening.opis;

    // kreiraj div za kartu
    let card = document.createElement('div');
    card.classList.add('card');

    // dodaj sve elemente na odgovarajuće div-ove
    imageDiv.appendChild(image);
    textDiv.appendChild(textP);
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    extraTextDiv.appendChild(extraText);
    card.appendChild(imageDiv);
    card.appendChild(textDiv);
    card.appendChild(list);
    card.appendChild(extraTextDiv);
    mainDiv.appendChild(card);
    // dodaj h1 i kartu na stranicu
    document.getElementById("trening").appendChild(h1);
    document.getElementById("trening").appendChild(mainDiv);

}