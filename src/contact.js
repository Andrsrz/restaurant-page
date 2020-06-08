const Contact = (() => {
	var contactDivDOM;

	const render = (body) => {
		body.clearMain();
		contactDivDOM = document.createElement("div");
		contactDivDOM.id = "contactdiv";
		contactDivDOM.className = "contentdiv";
		let form = document.createElement("form");
		form.id = "contactForm";
		/* name input */
		let name = document.createElement("input");
		let nameLabel = document.createElement("label");
		name.type = "text";
		name.id = "name";
		nameLabel.for = "name";
		nameLabel.innerHTML = "Name";
		nameLabel.style.textAlign = "left";
		/* number input */
		let number = document.createElement("input");
		let numberLabel = document.createElement("label");
		number.type = "number";
		number.id = "number";
		numberLabel.for = "number";
		numberLabel.innerHTML = "Whatsapp number";
		numberLabel.style.textAlign = "left";
		/* message */
		let message = document.createElement("textarea");
		let messageLabel = document.createElement("label");
		message.id = "message";
		messageLabel.for = "message";
		messageLabel.innerHTML = "What do you want to say to us?";
		messageLabel.style.textAlign = "left";
		/* submit */
		let submit = document.createElement("input");
		submit.type = "submit";
		submit.id = "submit";
		submit.value = "Send";
		form.appendChild(nameLabel);
		form.appendChild(name);
		form.appendChild(numberLabel);
		form.appendChild(number);
		form.appendChild(messageLabel);
		form.appendChild(message);
		form.appendChild(submit);
		contactDivDOM.appendChild(form);
		body.getMain().appendChild(contactDivDOM);
	}

	return { render };
})();

export { Contact };
