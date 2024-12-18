const resizeButton = document.querySelector("#resize");
const container = document.querySelector(".container");
let opacity = .10;

function createOpacity(currentOpacity) {
    let opacityToSet = currentOpacity;
    console.log(opacityToSet);
    if (opacity < 1.0) {
        opacity += 0.1;
    }
    return opacityToSet;
}

function generateRandomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function createRows(numRows) {
    for (let i=0; i<numRows; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);
    }
}

function createSquares(numSquares, rows) {
    rows.forEach(function(row) {
        for (let i=0; i<numSquares; i++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-square");
            newSquare.addEventListener("mouseover", function(event) {
                const thisDiv = event.target;
                thisDiv.style.backgroundColor = generateRandomRGB();
                thisDiv.style.opacity = createOpacity(opacity);
            });
            row.appendChild(newSquare);
        }
    });
}

function createGrid(gridSize) {
    createRows(gridSize);
    const rows = document.querySelectorAll(".row");
    createSquares(gridSize, rows);
}

function destroyGrid() {
    let rows = container.querySelectorAll(".row");
    rows.forEach(function(row) {
        row.remove();
    });

    opacity = 0.10;
    initializeGrid();
}

function initializeGrid() {
    let gridSize = "Not Set";

    while (isNaN(gridSize) || gridSize < 2 || gridSize > 100) {
        gridSize = prompt("How big would you like the grid? (Min 2, Max 100"); 
        gridSize = parseInt(gridSize);
        console.log(gridSize);
    }

    createGrid(gridSize);

}

function testPrompt() {
    let test = "";
    while (test !== "test") {
        test = prompt("Write: 'test' to break");
    }
    console.log("we break the loop")
}

resizeButton.addEventListener("click", function(event) {
    destroyGrid();
});

