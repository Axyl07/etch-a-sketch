




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
                col.style.backgroundColor = 'black';
            })
        }
    }
}
createGrid(100,100);


const buttonDiv = document.querySelector("#buttonDiv");
const btn = document.createElement("button");
btn.textContent = 'Change Grid';
btn.addEventListener('click', () => {
    let newRow = prompt("Enter number of rows");
    let newCol  = prompt("Enter number of columns");
     createGrid(newRow,newCol)
    // container.removeChild(row);
    // container.removeChild(col);
})

buttonDiv.appendChild(btn);