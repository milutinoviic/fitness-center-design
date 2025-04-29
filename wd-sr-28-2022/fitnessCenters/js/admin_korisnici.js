let firebaseUrl =
    "https://fitnescentri-f1e4f-default-rtdb.firebaseio.com";

let usersUrl = firebaseUrl + "/korisnici.json";


let userRequest = new XMLHttpRequest();

userRequest.onreadystatechange = function () {

    if (this.readyState == 4) {

        if (this.status == 200) {
            //   console.log(this.responseText);
            let users = JSON.parse(this.responseText);
            console.log(users);
            // console.log(gyms);

            for (let id in users) {
                let user = users[id];
                console.log(user);

            }
            kreirajTabeluKorisnika(users);


        } else {
            alert("Greska prilikom dobavljanja podataka");
        }
    }
};
userRequest.open("GET", usersUrl);
userRequest.send();






function showEditUserPage() {
    let clickedBtn = this;
    // console.log(clickedBtn);
    let userId = clickedBtn.getAttribute("data-id");

    window.location.href = "izmjena_podataka_korisnika.html?id=" + userId;
}




function kreirajTabeluKorisnika(korisnici) {
    // kreiraj tabelu
    let table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-light');

    // kreiraj zaglavlje tabele
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerHTML = 'Ime';
    th1.scope = 'col';
    let th2 = document.createElement('th');
    th2.innerHTML = 'Prezime';
    th2.scope = 'col';
    let th3 = document.createElement('th');
    th3.scope = 'col';
    let th4 = document.createElement('th');
    th4.scope = 'col';

    // dodaj čelije u red zaglavlja
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);

    // kreiraj telo tabele
    let tbody = document.createElement('tbody');


    for (let id in korisnici) {
        let korisnik = korisnici[id];
        let tr2 = document.createElement('tr');
        let td5 = document.createElement('th');
        td5.scope = 'row';
        let a4 = document.createElement('a');
        a4.href = 'korisnickiprofil.html?id=' + id;
        a4.innerHTML = korisnik.ime;
        td5.appendChild(a4);
        let td6 = document.createElement('td');
        td6.innerHTML = korisnik.prezime;
        let td7 = document.createElement('td');

        let btn2 = document.createElement('button');
        btn2.type = 'button';
        btn2.classList.add('btn', 'btn-primary');
        btn2.innerHTML = 'Izmeni';
        btn2.onclick = showEditUserPage;
        btn2.setAttribute("data-id", id);
        td7.appendChild(btn2);
        let td8 = document.createElement('td');

        let btn3 = document.createElement('button');
        btn3.type = 'button';
        btn3.classList.add('btn', 'btn-danger');
        btn3.innerHTML = 'Obrisi';
        btn3.addEventListener('click', function () {
            const modal = document.getElementById("modal");
            modal.style.display = 'block';
            const closeButton = document.getElementById("close-button");
            closeButton.addEventListener('click', function () {
                const modal = document.getElementById("modal");
                modal.style.display = 'none';
            });
            
            const yesButton = document.getElementById("modal-yes");
            yesButton.onclick = function(){
                obrisiKorisnika(id);
            }
        });
        td8.appendChild(btn3);



        tr2.appendChild(td5);
        tr2.appendChild(td6);
        tr2.appendChild(td7);
        tr2.appendChild(td8);


        // dodaj sve elemente u tabelu

        tbody.appendChild(tr2);

    }



    table.appendChild(thead);
    table.appendChild(tbody);

    // dodaj tabelu na stranicu
    document.getElementById("korisnici").appendChild(table);
}
function obrisiKorisnika(idKorisnika) {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                window.location.href="admin_korisnici.html";
            } else {
                alert("Greška prilikom brisanja");
            }
        }
    };

    request.open("DELETE","https://fitnescentri-f1e4f-default-rtdb.firebaseio.com/korisnici/"+idKorisnika+".json");
    request.send();


}

function zatvoriModal() {
    document.getElementById('modal').style.display='none';

}

