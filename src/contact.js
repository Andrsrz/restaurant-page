const Contact = (() => {
	const TEXT = "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!";
	var contactDivDOM;

	const render = (body) => {
		body.clearMain();
		contactDivDOM = document.createElement("div");
		let h3 = document.createElement("h3");
		h3.innerHTML = TEXT;
		contactDivDOM.appendChild(h3);
		body.getMain().appendChild(contactDivDOM);
	}

	return { render };
})();

export { Contact };
