const container = document.querySelector(".container");
// Create grid divs and append them to DOM
let count = 0;
while (count < 256) {
    count += 1
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
});
