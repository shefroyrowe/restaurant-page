import { contactPage } from "./contact";
import { mainPageInit } from "./page-load";

export function menuPage() {
    //get content div element
    const body = document.getElementById('content');

    //create main elements for page structure
    const pageHeader = document.createElement('header');
    const heading = document.createElement('h1');
    const headImage = document.createElement('img');
    const description = document.createElement('div');
    description.classList.add('menu');

    //create nav
    const homeBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = mainPageInit();
    })

    contactBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = contactPage();
    })

    homeBtn.textContent = 'HOME';
    contactBtn.textContent = 'CONTACT';

    //nav buttons
    const navButtons = document.createElement('div');
    navButtons.classList.add('navBtns');
    navButtons.appendChild(homeBtn);
    navButtons.appendChild(contactBtn);

    //propagate elements with content
    heading.textContent = 'SHEFROY\'S ( MENU )';
    headImage.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdigitalphotographysuccess.com%2Fwp-content%2Fuploads%2F2019%2F04%2Ffood1-e1555158787425.jpg&f=1&nofb=1&ipt=84d534b7599881b2c6c3d2e3ce9057e115c81037c25ed88bb0cabaef0118a44c&ipo=images');

    //generate menu
    description.appendChild(createMenuItem('Manzo Italiano', 'Slow cooked pot roast, Provolone, Baguette.'));
    description.appendChild(createMenuItem('Formaggio ', 'Toasted cheese, house ricotta spread, Provolone, Focaccia.'));
    description.appendChild(createMenuItem('Polpetta Italiano ', 'Meatballs, house ricotta spread sauteed spniach and garlic baguette.'));
    description.appendChild(createMenuItem('Panino Parma', 'Chicken breast, marinara mozzarella, baguette.'));
    description.appendChild(createMenuItem('Panino Pollo', 'Chicken breast, roasted red pepper provolone, lettuce pepperoncini aioli, focaccia.'));
    description.appendChild(createMenuItem('Salumi Assortiti', 'Capicola, salami, pepperoni provolone, lettuce, tomato pepperoncini aioli, focaccia'));

    //append propagated elements to their parent elements
    pageHeader.appendChild(heading);
    pageHeader.appendChild(navButtons);

    body.appendChild(pageHeader);
    body.appendChild(headImage);
    body.appendChild(description);

    return body;
}

//create menu
function createMenuItem(name, ingredients) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = ingredients;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}


//function to clear body contents
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}