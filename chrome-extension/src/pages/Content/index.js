import { printLine } from "./modules/print";

console.log("Content script works!");
console.log("Must reload extension for modifications to take effect.");

printLine("Using the 'printLine' function from the Print Module");

let id = "ldfceamgefbimhknjmmffacccemedibb";

document.querySelector("button").onclick = () => {
	console.log("button clicked");
	chrome.runtime.sendMessage(
		id,
		{ message: "buttonClicked" },
		function (response) {
			if (!response.success) console.log("err");
			else console.log("ok");
		}
	);
};
