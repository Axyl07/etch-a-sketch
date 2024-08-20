
const container = document.querySelector("#container");
function createGrid(row,col){
    for (let index = 0; index < row; index++) {
        const row = document.createElement("div");
        row.className = 'row';
        row.style.display = 'flex'
        row.style.flex = '1'
        container.appendChild(row);
        for (let j = 0; j < col; j++) {
            const col = document.createElement("div");
            col.style.display = 'flex'
            col.style.flex = '1';
            col.className = 'col';
            col.style.backgroundColor = 'pink'
            col.style.border = '1px solid black'
            col.style.margin = '1px'
            col.style.borderRadius = '2px'
            // col.style.alignItems = 'stretch';

            row.appendChild(col);
            col.addEventListener('mouseover', () => {
                if (rainbow.checked) {
                    max = 255
                    let red = Math.floor(Math.random() * max);
                    let blue = Math.floor(Math.random() * max);
                    let green = Math.floor(Math.random() * max);
                    // "rgb("+red+", "+blue+", "+green+")"
                    col.style.backgroundColor = "rgb("+red+", "+blue+", "+green+")";
                    col.style.opacity = "0.1";
                    col.style.opacity = parseFloat(col.style.opacity)+0.1;
                    console.log(col.style.backgroundColor);
                }else {
                    col.style.backgroundColor = "black";
                    col.style.opacity = "0.1";
                    col.style.opacity = "parseFloat(col.style.opacity)+0.1";
                }
            })
        }
    }
}
createGrid(16,16);

const rainbow = document.querySelector('#rainbow');


const buttonDiv = document.querySelector("#buttonDiv");
const resetButton = document.createElement("button");
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
        alert ("How to Use : For 16x16 grid enter No. of Rows = 16 and No. of Cols = 16")
    let newRow = prompt("Enter number of rows (2->100)");
    let newCol  = prompt("Enter number of columns(2->100)");
    if(newRow!=newCol) alert("Values of Row and Column must be equal for ideal result")
    if (newRow <=100 && newCol <= 100) {
        createGrid(newRow,newCol);
    }else alert("Don't use values over 100");
})

buttonDiv.appendChild(resetButton);