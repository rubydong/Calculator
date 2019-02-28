let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");

document.addEventListener("keydown", evt => {
	if (evt.key.match(/(Enter)|[0123456789.\*+\/]/)) calc(evt.key, evt.key);
});

buttons.forEach(button => {
	button.onclick = (evt) => { calc(evt.target.dataset.action, evt.target.innerHTML);}
});


function calc (action, value) {
	if (action === "Enter") {
		try {
			display.innerHTML = eval(display.innerHTML);
		} catch (e) {
			display.innerHTML = "Not a number";
		}
	} else if (action === "clearDisplay") {
		display.innerHTML = "";
	} else if (action === "multiply") {
		display.innerHTML += "*";
	} else if (action === "divide") {
		display.innerHTML += "/";
	} else {
		if (display.innerHTML === "0" || display.innerHTML === "Not a number") display.innerHTML = value;
		else display.innerHTML += value;
	}
}