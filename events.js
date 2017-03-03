//*********************************************
//VARIABLES REFERENCING DOM ELEMENTS
//*********************************************
var outputTarget = document.getElementById("output-target");
var section = document.getElementsByTagName("article");
var hOneTag = document.getElementById("page-title");
var userInput = document.getElementById("keypress-input");
var colorButton = document.getElementById("add-color");
var guineaPig = document.getElementById('guinea-pig');
var hulkifyButton = document.getElementById("make-large");
var captureButton = document.getElementById('add-border');
var roundedButton = document.getElementById('add-rounding');

//*********************************************
//1) When any section is clicked the output target
//text should be "You clicked on the
//{text of the section} section"
//*********************************************

function mySection(e) {
	var target = e.target.classList.value;
	if (target === "article-section"){
		outputTarget.innerHTML = `You clicked on the ${e.target.textContent} section`;
	} 
}
window.addEventListener("click", mySection);

//*********************************************
//2) When the mouse is over the h1 tag, the output
//element should contain the text "You moved your
//mouse over the header".
//3) When the mouse leaves the h1 tag, the output
//element should contain the text "You left me!!".
//*********************************************

function hOneOver() {
	outputTarget.innerHTML = "You moved your mouse over the header";
}
function hOneOff() {
	outputTarget.innerHTML = "You left me!!";
}
hOneTag.addEventListener("mouseenter", hOneOver);
hOneTag.addEventListener("mouseleave", hOneOff);

//*********************************************
//4) When you type characters into the input field,
//the output element should mirror the text in the input field.
//*********************************************

function mirrorInput() {
	outputTarget.innerHTML = userInput.value;
}
userInput.addEventListener("keyup", mirrorInput);

//*********************************************
//5) When you click the "Add color" button, the
//guinea-pig element's text color should change to blue.
//*********************************************

function fontColor() {
	guineaPig.classList.add("addBlue");
}
colorButton.addEventListener("click", fontColor);

//*********************************************
//6) When you click the "Hulkify" button, the guinea-pig
//element's font size should become much larger.
//*********************************************

function fontSize() {
	guineaPig.classList.add("hulkify");
}
hulkifyButton.addEventListener("click", fontSize);

//*********************************************
//7) When you click the "Capture it" button, the
//guinea-pig element should have a border added to it.
//*********************************************

function border() {
	guineaPig.classList.add("addBorder");
}
captureButton.addEventListener("click", border);

//*********************************************
//8) When you click the "Rounded" button, the
//guinea-pig element's border should become rounded.
//*********************************************

function rounded() {
	guineaPig.classList.add("addBorder", "borderRounded");
}
roundedButton.addEventListener("click", rounded);

//*********************************************
// The first section's text should be bold.
//*********************************************

var firstSection = document.getElementsByTagName("article")[0].childNodes[1];
firstSection.classList.add("boldText");

//*********************************************
// The last section's text should be bold and italicized.
//*********************************************

var lastSection = document.getElementsByTagName("article")[0].childNodes[11];
lastSection.classList.add("italicizeText");

//*********************************************
// Make the buttons stop appearing next to each other
//as inline elements. Change them into block elements.
//*********************************************

var buttons = document.getElementsByTagName("button");
for (var x = 0; x < buttons.length; x++){
	buttons[x].classList.add("blockStyle");
}




