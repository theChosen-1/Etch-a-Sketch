const container = document.querySelector(".container");

// Create grid divs and append them to the DOM
function createGrid(number) {
    let count = 0;
    let squareSize = 960 / number;
    let totalSquares = number * number;

    while (count < totalSquares) {
        count += 1;
        const square = document.createElement("div");
        square.classList.add("square");
        // Set width and height dynamically
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);
    }
    // adds hover to each of the squares
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = ;
        });
    });
}

// function linked wiht button
function resizeMe() {
    let size = prompt("How many squares per side?");
    if (size === null){
        return;
    }
    size = parseInt(size);

    if (size > 100) {
        alert("Number too big! It should be less than 100.");
        return;
    }
    else if (size < 1) {
        alert("Number is too small!, It should be greater than 1.")
        return;
    }
    else {
        container.innerHTML = "";
        createGrid(size)
    }
}

// initializing button properties
const resizeGrid = document.querySelector(".resizeGrid");
resizeGrid.addEventListener("click", resizeMe);
// page initially loads with a 16x16 grid
createGrid(16);
