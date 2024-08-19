const container = document.querySelector("#container");

createGrid(16);

function createGrid(divSize){
    for (let index = 0; index < divSize; index++) {
        const row = document.createElement("div");
        row.className = 'row';
        row.style.display = 'flex';
        container.appendChild(row);
        for (let j = 0; j < divSize; j++) {
            const col = document.createElement("div");
            col.className = 'col';
            col.style.height = '20px'
            col.style.width = '20px'
            col.style.backgroundColor = 'pink'
            col.style.border = '3px solid black'
            col.style.margin = '2px'
            row.appendChild(col);
            col.addEventListener('mouseover', () => {
                col.style.backgroundColor = 'black';
            })
     }
    }
}

