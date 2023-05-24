//let menuItemsJSON = [{title: "Pradžia",url: "/"},{title: "Kontaktai",url: "kontaktai.html"},{title: "Darbai",url: "portfolio.html"}];
////let menuItems = JSON.parse(menuItemsJSON);
//let menu = document.querySelector('body > header > nav > ul');
//
//
//
//menu.innerHTML = menuItems.map(item => `<li><a href="${item.url}">${item.title}</a></li>`).join('');
//
////meniuItemsJSON.forEach((item) => {
////  let li = document.createElement("li");
////  let a = document.createElement("a");
////  a.href = item.url;
////  a.textContent = item.title;
////  li.appendChild(a);
////  menu.appendChild(li);
////});

//let menuItems = [{ title: "Pradžias", url: "/" },{ title: "Kontaktai", url: "kontaktai.html" },{ title: "Darbai", url: "portfolio.html" }];
//
//let menu = document.querySelector("body > header > nav > ul");
//
//menu.innerHTML = menuItems
//  .map((item) => `<li><a href="${item.url}">${item.title}</a></li>`)
//  .join("");
//
//const currentUrl = window.location.href.replace('.html', '');
//console.log(currentUrl);
//const menuButtons = document.querySelectorAll('.menu-button');
//menuButtons.forEach(button => {
//  const buttonUrl = button.href.replaceAll('.html', '');
//  if (buttonUrl.includes(currentUrl)) {
//    button.style.backgroundColor = 'blue';
//    button.style.color = 'white';
//    button.style.border = '2px solid blue';
//  }
//});

export class Menu {
    constructor() {
        const page = window.location.pathname;

        if (page) {
            this.redirectPage(page);
        }

        $.getJSON("meniu.json", (data) => {
            this.generateMenu(data);
        });

        console.info('Menu JS loaded');
    }

    generateMenu(meniuList) {
        const navigation = $('body > header > nav');
        navigation.html('');
        const menu = $('<ul>');

        for (let i = 0; i < meniuList.length; i++) {

            const meniuItemData = meniuList[i];

            const menuItem = $('<li>'); (pasitikslinti?)
            const link = $('<a>').attr('href', meniuItemData.url).text(meniuItemData.title);

            link.appendTo(menuItem);
            menuItem.appendTo(menu); // arba menu.append(menuItem);
        }

        navigation.append(menu);

        $(document).on("click", "nav a", (e) => {
            e.preventDefault();
            $('main').load($(this).attr('href') + ' main>div');
        });
    }


