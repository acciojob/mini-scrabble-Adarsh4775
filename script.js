//your code here
const enteredText = document.getElementById("Evtext");
const letterCount = document.getElementById("lettertext");

enteredText.addEventListener("input",() => {
	let text = enteredText.value;
	let count =text.length;

	letterCount.textContent=count;
});
