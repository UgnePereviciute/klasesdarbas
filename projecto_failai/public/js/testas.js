//for (let i = 0; i < menuList.length; i++) {
//
//    console.log(menuList[i].href.replaceAll('.html', ''));
//
//    menuList[i].href.replaceAll('.html', '');
//
//};
//
//
//let menuList = document.querySelectorAll('body > header > nav > ul > li > a');
//
//for (let i = 0; i < menuList.length; i++) {
//
//    console.log(menuList[i].href.replaceAll('.html', ''));
//
//    menuList[i].href.replaceAll('.html', '');
//
//};


window.addEventListener('DOMContentLoaded', (e) => {
    const inputText = document.getElementById('duomenys');
    const displayText = document.getElementById('displayText');
    let onBlurCount = 0;

    inputText.addEventListener('keyup', function() {
        displayText.textContent = inputText.value;
    });

    inputText.addEventListener('blur', function() {
        onBlurCount++;
        if (onBlurCount === 2) {
            localStorage.setItem('text', inputText.value);
        }
    });

    document.getElementById('myForm').addEventListener('submit', function(e){
        e.preventDefault();
        localStorage.setItem('text', inputText.value);
    });
});


//window.addEventListener('DOMContentLoaded', (e) => {
//    // Check if consent is already accepted
//    if (!localStorage.getItem('consent')) {
//        // If not, show confirm dialog
//        const consent = confirm('Ar sutinkate su privatumo politika?');
//        if (consent) {
//            // If user agreed, save it in localStorage
//            localStorage.setItem('consent', 'accepted');
//        }
//    }
//});


// Check if consent is already accepted
if (!localStorage.getItem('consent')) {
    // If not, show confirm dialog
    const consent = confirm('Do you agree to the terms and conditions?');
    if (consent) {
        // If user agreed, save it in localStorage
        localStorage.setItem('consent', 'accepted');
    }
}
$(function(){
    $("p").click(function(){
    $(this).css({display:'none'});

    });
});

