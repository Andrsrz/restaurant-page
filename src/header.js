import { Body } from './domBody.js';

const Header = (() => {
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
			buttonsDOM[i].setAttribute("class", "button");
			navbarDOM.appendChild(buttonsDOM[i]);
		}
		headerDOM.appendChild(navbarDOM);
		Body.getBody().appendChild(headerDOM);
	}

	return { render };
})();

export { Header };
