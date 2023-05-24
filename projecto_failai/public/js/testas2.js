

function random(to) {

    let randomNumber = Math.random();

    let number = Math.floor(Math.random() * 11);

    return number;
}

console.log(random());


let i = 0;

while(i <= 16) {
    console.log(i);
    i += 4;
}

//document.querySelector("#Tekstas").textContent = "Čia yra išdėstytos nuotraukos";
document.querySelector(".Tekstas").textContent = "Čia yra išdėstytos nuotraukos";