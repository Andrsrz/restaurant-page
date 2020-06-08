import tacos1 from './tacos1.jpg';
import tacos2 from './tacos2.jpg';
import tacos3 from './tacos3.jpg';
import tacos4 from './tacos4.jpg';

const Menu = (() => {
	const TEXT = "Aenean dictum sapien et diam.";
	const TEXT_2 = "Nunc interdum felis eu urna.";
	const TEXT_3 = "Sed pulvinar enim vitae neque.";
	const TEXT_4 = "Duis convallis, libero at feugiat.";
	const TEXTS = [TEXT, TEXT_2, TEXT_3, TEXT_4];
	const TACOS = [];
	const MAX_PRICE = 100;
	var menuDivDOM;

	const getRandom = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	}

	const createRandomList = () => {
		let randomList = document.createElement("ul");
		randomList.className = "list"
		for(let i = TEXTS.length; i > 0; i--){
			let listItem = document.createElement("li");
			listItem.className = "listItem";
			let food = document.createElement("h4");
			food.innerHTML = TEXTS[getRandom(i)];
			let price = document.createElement("h4");
			price.innerHTML = "$ " + getRandom(MAX_PRICE) + ".00";
			listItem.appendChild(food);
			listItem.appendChild(price);
			randomList.appendChild(listItem);
		}
		return randomList;
	}

	const initTacosArray = () => {
		let image = new Image();
		image.src = tacos1;
		let image2 = new Image();
		image2.src = tacos2;
		let image3 = new Image();
		image3.src = tacos3;
		let image4 = new Image();
		image4.src = tacos4;
		TACOS.push(image);
		TACOS.push(image2);
		TACOS.push(image3);
		TACOS.push(image4);

		for(let i = 0; i < TACOS.length; i++){
			TACOS[i].className = "menuImage";
		}
	}

	const render = (body) => {
		initTacosArray();
		body.clearMain();
		menuDivDOM = document.createElement("div");
		menuDivDOM.id = "menudiv";
		menuDivDOM.className = "contentdiv";
		for(let i = 0; i < TEXTS.length; i++){
			let title = document.createElement("h3");
			title.className = "listTitle";
			title.innerHTML = TEXTS[i];
			menuDivDOM.appendChild(title);
			console.log(TACOS[i]);
			menuDivDOM.appendChild(TACOS[i]);
			menuDivDOM.appendChild(createRandomList());
		}
		body.getMain().appendChild(menuDivDOM);
	}

	return { render };
})();

export { Menu };
