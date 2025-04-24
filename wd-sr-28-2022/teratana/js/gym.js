
let firebaseUrl =
"https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";
let gymId = getParamValue("id");
console.log("GYMID "+gymId);
let gymUrl = firebaseUrl +"/fitnesCentri/"+ gymId+".json";


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


function showEditPage() {
    let clickedBtn = this;
    // console.log(clickedBtn);
    let gymId = clickedBtn.getAttribute("data-id");
    console.log("USLOO" + gymId);
    window.location.href = "trening.html?id=" + gymId;
}


let request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == 4) {
        
        if (this.status == 200) {
        //   console.log(this.responseText);
        let gym = JSON.parse(this.responseText);
        dodaj_podatke(gym);
        let treninzi_id = gym.idTreninga;
        let treninziUrl = firebaseUrl +"/treninzi/"+ treninzi_id+".json";
        let treninzi_request = new XMLHttpRequest();
        treninzi_request.open("GET", treninziUrl,true);
        treninzi_request.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    let treninzi = JSON.parse(this.responseText);
                    for(let t in treninzi){
                        let trening = treninzi[t];
                        console.log(trening);
                        dodaj_trening(trening, t, treninzi_id);
                    }
                    console.log("dada");
                    console.log(treninzi);
                }else{
                    alert("Greska prilikom dobavljanja trening podataka");
                }
            }
        }
        treninzi_request.send();
        console.log(gym);
        
        
        
        
          
        } else {
          alert("Greska prilikom dobavljanja podataka");
        }
      }
    };
request.open("GET", gymUrl);
request.send();



function dodaj_podatke(gym){
   // kreiraj glavni div
   console.log("STEFAN 1337");
   console.log(gym);
let container = document.createElement('div');
container.classList.add('container', 'about-fitness-centers', 'm-10');

// kreiraj div za naslov
let titleRow = document.createElement('div');
titleRow.classList.add('row');
let titleCol = document.createElement('div');
titleCol.classList.add('col-lg-6');
let titleSection = document.createElement('div');
titleSection.classList.add('section-title');
let titleH2 = document.createElement('h2');
titleH2.innerHTML = 'O nama';

titleSection.appendChild(titleH2);

titleCol.appendChild(titleSection);
titleRow.appendChild(titleCol);
container.appendChild(titleRow);

// kreiraj div za sve feature box-ove
let featuresRow = document.createElement('div');
featuresRow.classList.add('row');

// kreiraj prvi feature box
let featureBox1 = document.createElement('div');
featureBox1.classList.add('col-sm-6', 'col-lg-4');
let featureBoxInner1 = document.createElement('div');
featureBoxInner1.classList.add('feature-box-1');
let featureContent1 = document.createElement('div');
featureContent1.classList.add('feature-content');
let featureH51 = document.createElement('h5');
featureH51.innerHTML = 'Adresa';
let featureP1 = document.createElement('p');
featureP1.innerHTML = gym.adresa;
featureContent1.appendChild(featureH51);
featureContent1.appendChild(featureP1);
featureBoxInner1.appendChild(featureContent1);
featureBox1.appendChild(featureBoxInner1);
featuresRow.appendChild(featureBox1);

// kreiraj drugi feature box
let featureBox2 = document.createElement('div');
featureBox2.classList.add('col-sm-6', 'col-lg-4');
let featureBoxInner2 = document.createElement('div');
featureBoxInner2.classList.add('feature-box-1');
let featureContent2 = document.createElement('div');
featureContent2.classList.add('feature-content');
let featureH52 = document.createElement('h5');
featureH52.innerHTML = 'Godina otvaranja';
let featureP2 = document.createElement('p');
featureP2.innerHTML = gym.godinaOtvaranja;
featureContent2.appendChild(featureH52);
featureContent2.appendChild(featureP2);
featureBoxInner2.appendChild(featureContent2);
featureBox2.appendChild(featureBoxInner2);
featuresRow.appendChild(featureBox2);

// kreiraj treći feature box
let featureBox3 = document.createElement('div');
featureBox3.classList.add('col-sm-6', 'col-lg-4');
let featureBoxInner3 = document.createElement('div');
featureBoxInner3.classList.add('feature-box-1');
let featureContent3 = document.createElement('div');
featureContent3.classList.add('feature-content');
let featureH53 = document.createElement('h5');
featureH53.innerHTML = 'Broj dostupnih treninga';
let featureP3 = document.createElement('p');
featureP3.innerHTML = gym.brojDostupnihTreninga;
featureContent3.appendChild(featureH53);
featureContent3.appendChild(featureP3);
featureBoxInner3.appendChild(featureContent3);
featureBox3.appendChild(featureBoxInner3);
featuresRow.appendChild(featureBox3);

// kreiraj četvrti feature box
let featureBox4 = document.createElement('div');
featureBox4.classList.add('col-sm-6', 'col-lg-4');
let featureBoxInner4 = document.createElement('div');
featureBoxInner4.classList.add('feature-box-1');
let featureContent4 = document.createElement('div');
featureContent4.classList.add('feature-content');
let featureH54 = document.createElement('h5');
featureH54.innerHTML = 'Mesecna clanarina';
let featureP4 = document.createElement('p');
featureP4.innerHTML = gym.mesecnaClanarina +' RSD';
featureContent4.appendChild(featureH54);
featureContent4.appendChild(featureP4);
featureBoxInner4.appendChild(featureContent4);
featureBox4.appendChild(featureBoxInner4);
featuresRow.appendChild(featureBox4);

// kreiraj peti feature box
let featureBox5 = document.createElement('div');
featureBox5.classList.add('col-sm-6', 'col-lg-4');
let featureBoxInner5 = document.createElement('div');
featureBoxInner5.classList.add('feature-box-1');
let featureContent5 = document.createElement('div');
featureContent5.classList.add('feature-content');
let featureH55 = document.createElement('h5');
featureH55.innerHTML = 'Ocjena';
let featureP5 = document.createElement('div');
featureP5.classList.add('text-center');
featureP5.innerHTML = '<p><b>'+gym.prosecnaOcena+'</b> / <b>10</b></p>';
featureContent5.appendChild(featureH55);
featureContent5.appendChild(featureP5);
featureBoxInner5.appendChild(featureContent5);
featureBox5.appendChild(featureBoxInner5);
featuresRow.appendChild(featureBox5);

// dodaj sve feature box-ove glavnom div-u
container.appendChild(featuresRow);

// dodaj glavni div na stranicu
document.getElementById("informacijeTeretana").appendChild(container);

let prosecnaOcena = document.getElementById("prosekOcena");
prosecnaOcena.innerText = gym.prosecnaOcena + " bazirano na osnovu "+ gym.ocene.length;
// prosecnaOcena.innerText = gym.prosecnaOcena;
// let brojOcena = document.getElementById("brojOcena");
// brojOcena.innerText = "bazirano na " + gym.ocene.length + " ocene";



}

function dodaj_trening(trening,id, treninzi_id){
    const container = document.createElement("div");
    container.className = "row";

    const card = document.createElement("div");
    card.className = "card mb-3";
    card.style.maxWidth = "1200px";

    const row = document.createElement("div");
    row.className = "row g-0";

    const col1 = document.createElement("div");
    col1.className = "col-md-4";

    const img = document.createElement("img");
    img.src = "images/milica2.jpg";
    img.className = "img-fluid rounded-start card-img";
    img.alt = "...";

    const col2 = document.createElement("div");
    col2.className = "col-md-8";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = trening.naziv;

    const p = document.createElement("p");

    p.className = "card-text";
    p.textContent = trening.kratakOpis;

    const a = document.createElement("a");
    a.href = "trening.html";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-success";
    button.textContent = "saznaj vise";
    button.setAttribute("data-id",treninzi_id+"/"+id);
    button.onclick = showEditPage;
    // Append elements to each other to form the desired structure
    col1.appendChild(img);
    col2.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(p);
    a.appendChild(button);
    cardBody.append(button);
    card.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    container.appendChild(card);

    // Append the container to the DOM
    document.getElementById("treninzi").appendChild(container);
}