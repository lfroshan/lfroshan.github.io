var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "Delete";
	input.value = "";

	liToggle();
	buttonDelete();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liToggle() {
    
    for(i=0;i<items.length;i++) {
        
        items[i].addEventListener("click",toggleClass);
    }
}

function toggleClass() {
	this.classList.toggle("done");
}

function buttonDelete() {
	var button = document.querySelectorAll("li button");
	for(i=0;i<button.length;i++) {
		button[i].addEventListener("click",clearElement);
	}
}

function clearElement() {
	for(var i=0;i<items.length;i++) {
          this.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liToggle();

buttonDelete();