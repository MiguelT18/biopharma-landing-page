/** @format */

const d = document;
const htmlElement = d.documentElement;

const DarkMode = () => {
	// Elements
	const $button = d.getElementById("dark-button");
	const $buttonText = d.getElementById("dark-button-text");

	const isDarkMode = localStorage.getItem("darkMode") === "true";
	htmlElement.classList.toggle("dark", isDarkMode);
	$button.classList.toggle("flex-row-reverse", isDarkMode);
	$buttonText.innerText = isDarkMode ? "Dark" : "Light";

	if ($button) {
		$button.addEventListener("click", () => {
			const toggle = htmlElement.classList.toggle("dark");
			$button.classList.toggle("flex-row-reverse", toggle);
			$buttonText.innerText = toggle ? "Dark" : "Light";

			localStorage.setItem("darkMode", toggle.toString());
		});
	}
};

export default DarkMode;
