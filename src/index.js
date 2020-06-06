function component() {
	const element = document.createElement('div');

	// Using my function
	element.innerHTML = 'Works';
	return element;
}

document.body.appendChild(component());
