const Menu = (() => {
	const TEXT = "Aenean dictum sapien et diam.";
	const TEXT_2 = "Nunc interdum felis eu urna.";
	const TEXT_3 = "Sed pulvinar enim vitae neque.";
	const TEXT_4 = "Duis convallis, libero at feugiat.";
	const TEXTS = [TEXT, TEXT_2, TEXT_3, TEXT_4];
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

	const render = (body) => {
		body.clearMain();
		menuDivDOM = document.createElement("div");
		menuDivDOM.id = "menudiv";
		menuDivDOM.className = "contentdiv";
		for(let i = 0; i < TEXTS.length; i++){
			let title = document.createElement("h3");
			title.className = "listTitle";
			title.innerHTML = TEXTS[i];
			menuDivDOM.appendChild(title);
			menuDivDOM.appendChild(createRandomList());
		}
		body.getMain().appendChild(menuDivDOM);
	}

	return { render };
})();

export { Menu };
