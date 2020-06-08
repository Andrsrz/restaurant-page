const About = (() => {
	const TEXT = "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!";
	var aboutDivDOM;

	const render = (body) => {
		aboutDivDOM = document.createElement("div");
		let h3 = document.createElement("h3");
		h3.innerHTML = TEXT;
		aboutDivDOM.appendChild(h3);
		body.appendChild(aboutDivDOM);
	}

	return { render };
})();

export { About };
