import { Body } from './domBody.js';
import { Header } from './header.js';
import { About } from './about.js';

Header.render(Body.getBody());

const Index = (() => {
	const tabsLogic = () => {
		let buttons = Header.getButtons();
		for(let i = 0; i < buttons.length; i++){
			buttons[i].addEventListener('clicl', (event) => {
				moveToTab(i);
			});
		}
	}

	const moveToTab = (index) => {
		switch(index){
			case 0:
				About.render(Body.getBody());
				break;
			case 1:
				break;
			case 2:
				break;
		}
	}

	return { tabsLogic };
})();

Index.tabsLogic();
