var button = document.getElementById('enter');
var input = document.getElementById('userinput')
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var donebutton = document.getElementsByClassName('donebutton');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done"));
	button.className = "done-button";
	button.addEventListener("click", deleteItem);
	li.appendChild(button);
	li.addEventListener("click", toggleDone);
	input.value = "";
}

function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
	}
}

function addListeners() {
	for (var i=0; i < li.length; i++) {
		li[i].addEventListener("click", toggleDone);
		donebutton[i].addEventListener("click", deleteItem);
	}
}

function toggleDone() {
	if (this.className=="") {
		this.className = "done";
	} else {
		this.className = "";
	}
}

function deleteItem() {
	this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick)

function addListAfterEnterPressed(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
			createListElement();
	}
}

addListeners();

input.addEventListener("keypress", addListAfterEnterPressed)
