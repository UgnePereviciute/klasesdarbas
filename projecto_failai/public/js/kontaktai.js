//const manoForma = document.querySelector('form');
//
//
//manoForma.addEventListener('submit', function(e) {
//    e.preventDefault();
//    console.log(e.target.elements.vardas.value)
////    vardas = 'Mindaugas';
////    console.log(vardas)
//})

//const form = document.querySelector("#my-form");
//const output = document.querySelector("#output");
//
//form.addEventListener("submit", function(event) {
//  event.preventDefault(); // prevent form submission
//
//  const firstName = document.querySelector("#first-name").value;
//  const lastName = document.querySelector("#last-name").value;
//  output.textContent = `Vardas: ${firstName}, Pavardė: ${lastName}`;
//
//  form.reset(); // clear the form inputs
//});

const manoForma = document.querySelector('form');
const output = document.getElementById('output');

manoForma.addEventListener('submit', function (e) {
    e.preventDefault();
    let vardas = e.target.elements.vardas.value;
    let pavarde = e.target.elements.pavarde.value;

    output.style.margin = '10px';
    output.innerHTML = `Vardas ${vardas} <br> Pavardė: ${pavarde}`;
})
