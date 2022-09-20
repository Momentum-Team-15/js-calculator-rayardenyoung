const displayAnswer = document.querySelector("#answer_box");

let buttons = document.querySelectorAll(".button")
for (let button of buttons) {
    button.addEventListener("click", (event) => {
        console.log(button.innerText);

        let newElement = document.createElement('div')
        let text = document.createTextNode(button.innerText)
        newElement.appendChild(text)
        displayAnswer.appendChild(newElement)

    })

}












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
