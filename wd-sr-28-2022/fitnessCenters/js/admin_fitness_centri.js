
let firebaseUrl =
  "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";



let fitnessUrl = firebaseUrl + '/fitnesCentri.json';

let fitnesRequest = new XMLHttpRequest();


fitnesRequest.onreadystatechange = function () {

  if (this.readyState == 4) {

    if (this.status == 200) {
      //   console.log(this.responseText);
      let fitnesCentri = JSON.parse(this.responseText);
      console.log(fitnesCentri);
      // console.log(gyms);

      // for (let id in users) {
      //     let user = users[id];
      //     console.log(user);

      // }
      // kreirajTabeluKorisnika(users);
      kreirajTabeluFitnesCentara(fitnesCentri);

    } else {
      alert("Greska prilikom dobavljanja podataka");
    }
  }
};
fitnesRequest.open("GET", fitnessUrl);
fitnesRequest.send();




function showEditGymPage() {
  let clickedBtn = this;
  // console.log(clickedBtn);
  let gymId = clickedBtn.getAttribute("data-id");
  console.log("------------------------------------")
  console.log(gymId)
  console.log("------------------------------------")


  window.location.href = "izmjena_podataka_fitness_centar.html?id=" + gymId;
}

function kreirajTabeluFitnesCentara(fitnesCentri) {
  // kreiraj tabelu
  let table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-light');

  // kreiraj zaglavlje tabele
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.scope = 'col';
  th.innerHTML = 'Fitnes centri';
  let th2 = document.createElement('th');
  th2.scope = 'col';
  let th3 = document.createElement('th');
  th3.scope = 'col';
  tr.appendChild(th);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);

  // kreiraj telo tabele
  let tbody = document.createElement('tbody');


  for (let id in fitnesCentri) {
    let fitnesCentar = fitnesCentri[id];
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('th');
    td1.scope = 'row';
    let a1 = document.createElement('a');
    a1.href = 'fitness_centar.html?id=' + id;
    a1.innerHTML = fitnesCentar.naziv;
    td1.appendChild(a1);
    let td2 = document.createElement('td');
    let btn1 = document.createElement('button');
    btn1.type = 'button';
    btn1.classList.add('btn', 'btn-primary');
    btn1.innerHTML = 'Izmeni';
    btn1.setAttribute("data-id", id);
    btn1.onclick = showEditGymPage;

    td2.appendChild(btn1);
    let td3 = document.createElement('td');

    let btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.classList.add('btn', 'btn-danger');
    btn2.innerHTML = 'Obrisi';
    btn2.addEventListener('click', function () {
      const modal = document.getElementById("modal");
      modal.style.display = 'block';
      const closeButton = document.getElementById("close-button");
      closeButton.addEventListener('click', function () {
        const modal = document.getElementById("modal");
        modal.style.display = 'none';
      });
      const yesButton = document.getElementById("modal-yes");
      yesButton.onclick = function () {
        obrisiTeretanu(id);
      }
    });
    td3.appendChild(btn2);

    // dodaj sve elemente u red
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    // dodaj sve elemente u tabelu
    tbody.appendChild(tr1);
  }
  // kreiraj prvi red u telu tabele

  table.appendChild(thead);
  table.appendChild(tbody);

  // dodaj tabelu na stranicu
  // document.body.appendChild(table);

  document.getElementById("fitnesCentri").appendChild(table);
}
function obrisiTeretanu(idTeretane) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        window.location.href = "admin_fitness_centri.html";
      } else {
        alert("Greška prilikom brisanja");
      }
    }
  };

  request.open("DELETE", firebaseUrl +"/fitnesCentri/"+ idTeretane + ".json");
  request.send();





}
function zatvoriModal() {
  document.getElementById('modal').style.display = 'none';

}