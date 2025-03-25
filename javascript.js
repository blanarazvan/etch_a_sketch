//Creearea unui tabel care sa primeasca input dimensiunea
// Creez coloanele dupa dimensiunea primita, apoi randurile
// Problema: Mi se creeaza prea multe randuri pentru o coloana
function makeGrid(gridDimension){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for(let i = 0; i < gridDimension; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < gridDimension; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        } 
        container.appendChild(column);
        }
    }
function leaveTrail(){
    document.querySelectorAll(".row").forEach(row => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#5E00CF"; // Change to any color for the trail
        });
    });
}
function userInput(){
    const button = document.querySelector(".gridNumber");
    button.addEventListener("click", () => {
        let gridDimension = prompt("Enter the number of squares per side:");
       
        if(gridDimension< 0 || gridDimension > 100 || isNaN(gridDimension)){
            alert("Please enter a number between 1 and 100.");
        } else {
            makeGrid(gridDimension);
            leaveTrail();
        }
    });
}

userInput();