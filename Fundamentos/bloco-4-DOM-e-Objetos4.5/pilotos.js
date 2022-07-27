let pilotos = document.getElementsByClassName('piloto-f1-atual');

for (let i = 0; i < 2; i++){
    pilotos[i].style.color = 'red';
}

let pilotostag = document.getElementsByTagName('p');

for (let i = 0; i <= pilotostag.length; i++){
    pilotostag[i].style.color = 'red';
    pilotostag[i].innerText = 'Olar';
}
