import cover from './tacoscover.jpg';

const About = (() => {
	const TEXT = "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!";
	const TEXT_2 = "Etiam quis interdum augue. Mauris vel nisl in sapien malesuada condimentum. Curabitur porta eleifend elit, et varius elit blandit vitae. In sit amet consequat purus. In hac habitasse platea dictumst. Donec volutpat facilisis suscipit. In ac nisl nec orci pretium sagittis vitae sit amet orci. Aliquam cursus ipsum in commodo tempus. Nulla lobortis, quam eu scelerisque maximus, lacus dolor auctor ipsum, eget suscipit orci sem in tellus.";
	var aboutDivDOM;

	const render = (body) => {
		body.clearMain();
		aboutDivDOM = document.createElement("div");
		aboutDivDOM.id = "aboutdiv";
		aboutDivDOM.className = "contentdiv";
		let image = new Image();
		image.src = cover;
		image.className = "cover";
		let h2 = document.createElement("h2");
		h2.innerHTML = TEXT;
		let h3 = document.createElement("h3");
		h3.innerHTML = TEXT_2;
		aboutDivDOM.appendChild(image);
		aboutDivDOM.appendChild(h2);
		aboutDivDOM.appendChild(h3);
		body.getMain().appendChild(aboutDivDOM);
	}

	return { render };
})();

export { About };
