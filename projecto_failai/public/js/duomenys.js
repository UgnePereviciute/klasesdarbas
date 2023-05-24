window.onload = function() {
    const color = getCookie("color");
    if (color != "") {
        document.body.style.backgroundColor = color;
        document.getElementById("color-form").style.display = "none";
        document.getElementById("delete-button").style.display = "block";
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    setCookie(cname, "", -1);
}

function formSubmit() {
    const color = document.getElementById("color-input").value;
    setCookie("color", color, 1);
}

function deleteColor() {
    deleteCookie("color");
    location.reload();
}
