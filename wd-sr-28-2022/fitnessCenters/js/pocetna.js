let firebaseUrl =
  "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";

let gymsUrl = firebaseUrl + "/fitnesCentri.json";

let request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == 4) {
        
        if (this.status == 200) {
        //   console.log(this.responseText);
        let gyms = JSON.parse(this.responseText);
        // console.log(gyms);
        
        for (let id in gyms) {
            let gym = gyms[id];
            console.log(gym);
            appendGym(id,gym);
        }
        
          
        } else {
          alert("Greska prilikom dobavljanja podataka");
        }
      }
    };
request.open("GET", gymsUrl,true);
request.send();



function showEditPage() {
    let clickedBtn = this;
    // console.log(clickedBtn);
    let gymId = clickedBtn.getAttribute("data-id");
    console.log("USLOO" + gymId);
    window.location.href = "fitness_centar.html?id=" + gymId;
}

function appendGym(id, gym){
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
img.src = gym.slika;
img.className = "img-fluid rounded-start card-img";
img.alt = "...";

const col2 = document.createElement("div");
col2.className = "col-md-8";

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const title = document.createElement("h5");
title.className = "card-title";
title.textContent = gym.naziv;

// const p1 = document.createElement("p");
// p1.className = "card-text";
// p1.textContent = "Naša studija za grupni fitnes i teretana sa ukupnom površinom od preko 600m2 opremeljeni su tako da budete i bezbedni i efikasni a od vas se samo traži da svoju pozitivnu energiju podelite sa drugima.";

const p2 = document.createElement("p");
p2.className = "card-text";

const small4 = document.createElement("small");
small4.className = "text-muted";
small4.textContent = "Adresa ";
const b4 = document.createElement("b");
b4.textContent = gym.adresa;


const small5 = document.createElement("small");
small5.className = "text-muted";
small5.textContent = "Mesecna clanarina ";
const b5 = document.createElement("b");
b5.textContent = gym.mesecnaClanarina;

const small1 = document.createElement("small");
small1.className = "text-muted";
small1.textContent = "Prosjecna ocjena ";

const b1 = document.createElement("b");
b1.textContent = gym.prosecnaOcena;

const small2 = document.createElement("small");
small2.className = "text-muted";
small2.textContent = " od ";

const b2 = document.createElement("b");
b2.textContent = "10";

const small3 = document.createElement("small");
small3.className = "text-muted";
small3.textContent = "Broj ocjena ";

const b3 = document.createElement("b");
b3.textContent = gym.ocene.length;

const button = document.createElement("button");
button.type = "button";
button.className = "btn btn-success";
button.textContent = "saznaj vise";
button.onclick = showEditPage;
button.setAttribute("data-id",id);


// Append elements to each other to form the desired structure
col1.appendChild(img);

small1.appendChild(b1);
small2.appendChild(b2);
small3.appendChild(b3);
small4.appendChild(b4);
small5.appendChild(b5);
p2.appendChild(small4);
p2.appendChild(document.createElement("br"));
p2.appendChild(small5);
p2.appendChild(document.createElement("br"));

p2.appendChild(small1);
p2.appendChild(small2);
p2.appendChild(document.createElement("br"));
p2.appendChild(small3);

cardBody.appendChild(title);
// cardBody.appendChild(p1);
cardBody.appendChild(p2);
// a.appendChild(button);
cardBody.appendChild(button);
col2.appendChild(cardBody);
row.appendChild(col1);
row.appendChild(col2);
card.appendChild(row);
container.appendChild(card);

let gymDiv = document.getElementById("gyms");
gymDiv.appendChild(container);
}
