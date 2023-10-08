//your code here
const enteredText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

enteredText.addEventListener("input",() => {
	let text = enteredText.value;
	let count =text.length;

	letterCount.textContent=count;
});
