// generate random colors

// result areas
let displayResult = document.getElementById("result");
let contColor = document.getElementById("container");

// link html button to function
let clickButton = document.getElementById("myBtn");
clickButton.addEventListener("click", changeColor);

function changeColor() {
    // randomize color with mathobjects
    let color = ["Blue", "Red", "Pink", "Yellow", "Grey", "Orange"];
    let numb = Math.floor(Math.random() * color.length);
    let showColor = color[numb];
    // display results in html document
    displayResult.innerHTML = showColor;
    contColor.style.backgroundColor = showColor;
    // show color and array index in console
    console.log(showColor);
    console.log(numb);
}
// execute function
changeColor();