const Body = (() => {
	var main;

	const getBody = () => document.body;
	const getMain = () => main;

	const renderMain = () => {
		main = document.createElement("main");
		main.id = "main";
		getBody().appendChild(main);
	}

	const clearMain = () => {
		while(main.firstChild){
			main.removeChild(main.firstChild);
		}
	}

	return { getBody, getMain, clearMain, renderMain };
})();

export { Body };
