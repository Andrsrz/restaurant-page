import { getBody } from './domBody.js';

const render = () => {
	let headerDOM = document.createElement("header");
	let navbarDOM = document.createElement("nav");
	let buttonAboutUs = document.createElement("button");
	buttonAboutUs.innerHTML = "About Us";
	let buttonMenu = document.createElement("button");
	buttonMenu.innerHTML = "Menu";
	let buttonContact = document.createElement("button");
	buttonContact.innerHTML = "Contact";
	let buttonsDOM = [];
	buttonsDOM.push(buttonAboutUs);
	buttonsDOM.push(buttonMenu);
	buttonsDOM.push(buttonContact);
	for(let i = 0; i < buttonsDOM.length; i++){
		navbarDOM.appendChild(buttonsDOM[i]);
	}
	headerDOM.appendChild(navbarDOM);
	getBody().appendChild(headerDOM);
}

export { render };
