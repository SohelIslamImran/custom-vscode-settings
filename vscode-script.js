const checkElement = setInterval(() => {
	const targetDiv = document.querySelector(".monaco-workbench");

	if (targetDiv) {
		// Remove existing element if it already exists
		const existingElement = document.getElementById("command-blur");
		if (existingElement) return;

		// Create and configure the new element
		const newElement = document.createElement("div");
		newElement.setAttribute("id", "command-blur");

		newElement.addEventListener("click", () => {
			const commandDialog = document.querySelector(".quick-input-widget");
			commandDialog.style.display = "none";
		});

		// Append the new element as a child of the targetDiv
		targetDiv.appendChild(newElement);

		clearInterval(checkElement);
	} else {
		console.log("Command dialog not found yet. Retrying...");
	}
}, 500); // Check every 500ms
