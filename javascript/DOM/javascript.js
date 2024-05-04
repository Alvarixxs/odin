
const container = document.querySelector('#container');
// Step 1: Create a new <p> element
const newParagraph = document.createElement('p');

// Step 2: Set the content of the <p> element
newParagraph.innerText = 'This is a new paragraph created with JavaScript.';

// Step 3: Set the color of the <p> element to red
newParagraph.style.color = 'red';

// Step 4: Append the <p> element to an existing element (e.g., the <body>)
container.appendChild(newParagraph);

const h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!"
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute("style", "outline: 3px solid black; background-color: pink; height: 200px;");

const hh1 = document.createElement('h1');
hh1.innerText = "I'm in a div!"
div.appendChild(hh1);

const pp = document.createElement('p');
pp.innerText = "ME TOO!"
div.appendChild(pp);

container.appendChild(div);