import { Body } from './domBody.js';
import { Header } from './header.js';
import { About } from './about.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';

Header.render(Body.getBody());
Body.renderMain();

const Index = (() => {
	const tabsLogic = () => {
		let buttons = Header.getButtons();
		for(let i = 0; i < buttons.length; i++){
			buttons[i].addEventListener('click', () => {
				moveToTab(i);
			});
		}
	}

	const moveToTab = (index) => {
		switch(index){
			case 0:
				About.render(Body);
				break;
			case 1:
				Menu.render(Body);
				break;
			case 2:
				Contact.render(Body);
				break;
		}
	}

	return { tabsLogic };
})();

Index.tabsLogic();
