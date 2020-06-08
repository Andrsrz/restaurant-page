import './style.css';

const Header = (() => {
	var headerDOM;
	var navbarDOM;
	var buttonsDOM = [];

	const getButtons = () => buttonsDOM;

	const render = (body) => {
		headerDOM = document.createElement("header");
		navbarDOM = document.createElement("nav");
		let buttonAboutUs = document.createElement("button");
		buttonAboutUs.id = "aboutus";
		buttonAboutUs.innerHTML = "About Us";
		let buttonMenu = document.createElement("button");
		buttonMenu.innerHTML = "Menu";
		let buttonContact = document.createElement("button");
		buttonContact.innerHTML = "Contact";
		buttonsDOM.push(buttonAboutUs);
		buttonsDOM.push(buttonMenu);
		buttonsDOM.push(buttonContact);
		for(let i = 0; i < buttonsDOM.length; i++){
			buttonsDOM[i].setAttribute("class", "button");
			navbarDOM.appendChild(buttonsDOM[i]);
		}
		headerDOM.appendChild(navbarDOM);
		body.appendChild(headerDOM);
	}

	return { render, getButtons };
})();

export { Header };
