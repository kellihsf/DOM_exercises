const containerDiv = document.getElementById("container")

const heading = document.getElementById("heading")
heading.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "grey";
    }, 500);
}, false);

const bodyElement = document.body;
bodyElement.style.backgroundColor = "white"

const paragraphElement = document.createElement("p")
paragraphElement.textContent = "Obviously blue money, so out of the loop tbrand terrorists, so my capacity is full. Drink the Kool-aid nail it down nor my supervisor didn't like the latest revision you gave me can you switch back to the first revision?, yet cross-pollination, yet we're building the plane while we're flying it productize."
paragraphElement.style.color = "black"
paragraphElement.style.fontWeight = "bold"
containerDiv.appendChild(paragraphElement)


const paragraphElement2 = document.createElement("p")
paragraphElement2.textContent = "With gusto. One hundred dollars. No! The cat shelter's on to me. Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts! I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? Leela's gonna kill me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Who am I making this out to? Can I use the gun? Bender, quit destroying the universe!"
paragraphElement2.style.color = "black"
paragraphElement2.style.fontWeight = "bold"
containerDiv.appendChild(paragraphElement2)

let myButton = document.createElement("button")
myButton.textContent = "Upside down"
containerDiv.appendChild(myButton)

myButton.addEventListener("click", () => {
    heading.style.color = "red"
    paragraphElement2.style.color = "white"
    paragraphElement.style.color = "white"
    bodyElement.style.backgroundColor = "black";
})

let myButton2 = document.createElement("button")
myButton2.textContent = "Hawkins"
containerDiv.appendChild(myButton2)

myButton2.addEventListener("click", () => {
    paragraphElement2.style.color = "white"
    paragraphElement.style.color = "white"
    bodyElement.style.backgroundColor = "blue"
})

let inputField = document.getElementById("demo")
document.getElementById("demo").addEventListener("keypress", () => { 
    inputField.style.backgroundColor = "red"
})

let nameField = document.getElementById("namefield")

function myFunction() {
    let x = document.getElementById("namefield");
    x.value = x.value.toUpperCase();
  }

