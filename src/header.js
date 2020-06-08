import { getBody } from './domBody.js';

const render = () => {
	let headerDOM = document.createElement("header");
	let navbarDOM = document.createElement("nav");
	let buttonAboutUs = document.createElement("button");
	let buttonMenu = document.createElement("button");
	let buttonContact = document.createElement("button");
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
