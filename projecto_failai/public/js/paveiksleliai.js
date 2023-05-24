let paveiksleliai = document.getElementsByClassName('galerijos_foto');
let skaiciuoti = paveiksleliai.length;
let tekstas = document.getElementById('uuid')

console.log(skaiciuoti);
tekstas.innerHTML = `Siame puslapyje yra ${skaiciuoti} paveiksleliai`

let mygtukas = document.getElementById('paspausti').onclick = () => alert(`Šiame puslapyje yra ${document.getElementsByClassName('galerijos_foto').length} paveikslėliai`);

let elementai = document.getElementsByClassName('element');
for (let elementas = 0; elementas < elementai.length; zodis++) {
    if (elementas % 2 !== 0) {
        elementai[elementas].textContent = 'Testas';
    }
}