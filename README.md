# GUINEA PIG ASSIGNMENT
##### Working with DOM Handlers and Event Listeners
##### Focus on functionality -> styling minimal to assignment requirements

#### ASSIGNMENT PARAMETERS:
1. Create an index.html [BOILERPLATE AND SAMPLE CODE WAS PROVIDED FOR THIS ASSIGNMENT]
1. Create and link a JavaScript and CSS file
1. Implement the `element.classList` method to manipulate CSS classes on elements
1. Perform the following adjustments using JavaScript and CSS classes:
	- when `<section>` is "clicked" --> output to DOM "You clicked on the {text of the section} section"
	- `mouseenter` eventListener for `<h1>` tag to output "You moved your mouse over the header".
	- `mouseleave` eventListener for `<h1>` tag to output "You left me!!".
	- When you type characters into the input field, the output should mirror the text in the input field.
	- When you click the "Add color" button, the guinea-pig element's text color should change to blue.
	- When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
	- When you click the "Capture it" button, the guinea-pig element should have a border added to it.
	- When you click the "Rounded" button, the guinea-pig element's border should become rounded.
	- Add a class on the first section's text to bold.
	- Add a class on the last section's text to bold and italicize.
	- Make the buttons block elements.

#### SAMPLE CODE:
```
//FUNCTIONALITY AND ASSIGNMENT REQUIREMENTS:
//*********************************************
//7) When you click the "Capture it" button, the
//guinea-pig element should have a border added to it.
//*********************************************

function border() {
	guineaPig.classList.add("addBorder");
}
captureButton.addEventListener("click", border);
```
#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#### SCREENSHOT AND COMPARISONS OF BEFORE/AFTER BUTTON CLICKS
![before and after button clicks]()

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS