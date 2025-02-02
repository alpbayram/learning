const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!"

container.appendChild(content)

const content2 = document.createElement("p")
content2.textContent = "Hey I'm red!"
content2.style.color = "red"
container.appendChild(content2)

const content3 = document.createElement("h3")
content3.textContent = "I a blue h3!"
content3.style.color = "blue"
container.appendChild(content3)

const div = document.createElement("div")
div.style.backgroundColor = "pink"

div.style.border = "3px black solid"

container.appendChild(div)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)
const content4 = document.createElement("p")
content4.textContent = "ME TOO!"

div.appendChild(content4)

// the JavaScript file
// the JavaScript file
const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
	alert("Hello World")
})
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  