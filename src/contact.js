import { mainPageInit } from "./page-load";
import { menuPage } from "./menu";


export function contactPage(){
    //get content div element
const body = document.getElementById('content');

    //create main elements for page structure
    const pageHeader = document.createElement('header'); 
    const heading = document.createElement('h1');
    const headImage = document.createElement('img');
    const description = document.createElement('div');
    description.classList.add('contact');

    //create nav
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');

    homeBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = mainPageInit();
    })
    menuBtn.addEventListener('click', ()=>{
        removeAllChildNodes(body);
        body = menuPage();
    })

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';

    //nav buttons container
    const navButtons = document.createElement('div');
    navButtons.classList.add('navBtns');
    navButtons.appendChild(homeBtn);
    navButtons.appendChild(menuBtn);
    
    //propagate elements with content
    heading.textContent = 'SHEFROY\'S ( Contact Us )';
    headImage.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Ff3%2Fc3%2Fd4%2Ff3c3d4b9b6dc8e7528880ddfbe0d33b7.jpg&f=1&nofb=1&ipt=cae1f3d00b0b965cf8e5b9711c6ea5d83d2c87c29b5a03564a097d8be107ac49&ipo=images');

    //generate contact
    description.appendChild(createContact('Contact us@', 'Some place along Santa Monica Drive'));
    description.appendChild(createContact('Address:', 'Panorama city, C.A.'));
    description.appendChild(createContact('Email:', 'shefroys@totallyrealemail.com'));
    description.appendChild(createContact('Tele:', '1(888)-225-call-shefroys'));

    //append propagated elements to their parent elements
    pageHeader.appendChild(heading);
    pageHeader.appendChild(navButtons);

    body.appendChild(pageHeader);
    body.appendChild(headImage);
    body.appendChild(description);

    return  body;
}

//create contact
function createContact(name, info) {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
  
    const headingName = document.createElement("h3");
    headingName.textContent = name;
  
    const contactInfo = document.createElement("p");
    contactInfo.textContent = info;
  
    contactItem.appendChild(headingName);
    contactItem.appendChild(contactInfo);
  
    return contactItem;
  }

  //function to clear body contents
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}