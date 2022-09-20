let buttons = document.querySelectorAll(".button")
for (let button of buttons)
    button.addEventListener("click", (event) => {
        console.log(button.innerText);
    })

// JS, go find all the elements with the class 'button'
// querySelector only finds the first element
// JS gets the literal chunks of HTML

let resultsBar = document.querySelector(".results_bar");
// JS gets the picture frame element

// let button7 = document.querySelector('#seven');
//     //makes 7 clickable, logs inner text of id seven 
//     button7.addEventListener("click", (event) => {
//         console.log(button7.innerText);
//     })






for (let button of buttons) {
    // use a loop to apply the behavior to every square
    button.addEventListener("click", (event) => {
        // listen (wait) for the user to click and then do
        // the stuff inside the {}

        // template literal allows us to put variable values in the middle
        // text
        button.classList.remove("green");
        button.classList.add("teal");





        /* if (button.id === "square--one") {
          console.log(`The ${square.innerText} was clicked`);
          frame.style.backgroundImage = 'url("http://placekitten.com/300/300")';
          console.log(frame.style.backgroundImage);
        } */

    });
}
