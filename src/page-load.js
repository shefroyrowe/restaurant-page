import { contactPage } from "./contact";
import { menuPage } from "./menu";


export function mainPageInit() {
    //get content div element
    const body = document.getElementById('content');

    //create main elements for page structure
    const pageHeader = document.createElement('header');
    const heading = document.createElement('h1');
    const headImage = document.createElement('img');
    const description = document.createElement('div');

    //create nav
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    menuBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = menuPage();
    })

    contactBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = contactPage();
    })

    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    //nav buttons
    const navButtons = document.createElement('div');
    navButtons.classList.add('navBtns');
    navButtons.appendChild(menuBtn);
    navButtons.appendChild(contactBtn);

    //propagate elements with content
    heading.textContent = 'SHEFROY\'S';
    headImage.setAttribute('src', 'https://1.bp.blogspot.com/-eRQRjVi5xlk/VN4a6hFXp2I/AAAAAAAACXM/F6YEHhVamBw/s1600/1380310-Garlic%2BAnd%2BTomatoes%2BFood%2BHD%2BWallpaperz.jpg');
    description.textContent = 'Shefroy\'s restaurant and bar stands atop the dubbed \'Mandeville Hill\' \n and boast\'s some of the towns most prolific clientel. For an outstanding dining experience and a affordable price point you too can have a taste of luxury.';

    //append propagated elements to their parent elements
    pageHeader.appendChild(heading);
    pageHeader.appendChild(navButtons);

    body.appendChild(pageHeader);
    body.appendChild(headImage);
    body.appendChild(description);

    return body;
}


//function to clear body contents
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
