const Menu = (() => {
	const TEXT = "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!";
	var menuDivDOM;

	const render = (body) => {
		body.clearMain();
		menuDivDOM = document.createElement("div");
		let h3 = document.createElement("h3");
		h3.innerHTML = TEXT;
		menuDivDOM.appendChild(h3);
		body.getMain().appendChild(menuDivDOM);
	}

	return { render };
})();

export { Menu };
