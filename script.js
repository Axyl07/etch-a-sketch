const rainbow = document.querySelector('#rainbow');
// const hover = document.querySelector('#hover');
const colorPicker = document.querySelector('#colorPicker');
const eraser = document.querySelector('#eraser');

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
            col.style.border = '1px dotted black'
            // col.style.margin = '1px'
            // col.style.borderRadius = '2px'
            row.appendChild(col);
        
                col.addEventListener('mouseover', () => {
                    if (rainbow.checked) {
                        if (eraser.checked) {
                            col.style.backgroundColor = 'pink';
                        }else {
                        max = 255
                        let red = Math.floor(Math.random() * max);
                        let blue = Math.floor(Math.random() * max);
                        let green = Math.floor(Math.random() * max);
                        col.style.backgroundColor = "rgb("+red+", "+blue+", "+green+")";
                        }
                    }else {
                        col.style.backgroundColor = `${colorPicker.value}`;
                        if (eraser.checked) {
                            col.style.backgroundColor = 'pink';
                        }else col.style.backgroundColor = `${colorPicker.value}`;
                        
                    }
                    
                })
            
            // else if (eraser.checked) {
            //     col.addEventListener('mouseover',()=>{
            //         if (rainbow.checked) {
            //             max = 255
            //             let red = Math.floor(Math.random() * max);
            //             let blue = Math.floor(Math.random() * max);
            //             let green = Math.floor(Math.random() * max);
            //             col.style.backgroundColor = "rgb("+red+", "+blue+", "+green+")";
            //         }else {
            //             col.style.backgroundColor = "pink";
                        
            //         }
            //     })
            // }
        }
        }
    }

createGrid(16,16);


const buttonDiv = document.querySelector("#buttonDiv");
const resetButton = document.createElement("button");
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    alert ("How to Use : For a 16x16 grid enter size = 16")
    let size = prompt("Enter size of grid (2->100)");
        if (size <=100) {
            createGrid(size,size);
        }else alert("Don't use values over 100 or smaller than 2");
    })
    
    buttonDiv.appendChild(resetButton);


    const clear = document.createElement('button');
    clear.textContent = 'Clear Sketchpad'
    clear.addEventListener('click',()=>{
        const allCols = document.querySelectorAll(col);
        allCols.backgroundColor = 'pink'

    })
    buttonDiv.appendChild(clear);