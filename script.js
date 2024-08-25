const rainbow = document.querySelector('#rainbow');
const hover = document.querySelector('#click');
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
            let col = document.createElement("div");
           
            col.style.display = 'flex'
            col.style.flex = '1';
            col.className = 'col';
            col.style.backgroundColor = 'white'
            row.appendChild(col);
            col.addEventListener('mouseover', (e) => { 
                if(click.checked){
                if(e.buttons){
                if (rainbow.checked) {
                    if (eraser.checked) {
                        col.style.backgroundColor = 'white';
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
                        col.style.backgroundColor = 'white';
                    }else col.style.backgroundColor = `${colorPicker.value}`;
                    
                }
            }
        } else {
            if (rainbow.checked) {
                if (eraser.checked) {
                    col.style.backgroundColor = 'white';
                }else {
                    max = 255
                    let red = Math.floor(Math.random() * max);
                    let blue = Math.floor(Math.random() * max);
                    let green = Math.floor(Math.random() * max);
                    col.style.backgroundColor = "rgb("+red+", "+blue+", "+green+")";
                    // col.style.opacity = "0.1"
                    // col.style.opacity += "0.1";
                }
            }else {
                col.style.backgroundColor = `${colorPicker.value}`;
                // col.style.opacity = "0.1"
                // col.style.opacity += "0.1";
                if (eraser.checked) {
                    col.style.backgroundColor = 'white';
                }else col.style.backgroundColor = `${colorPicker.value}`;
                
            }
        }
    
            })
      
                        }
                    }
    
                }
                
                createGrid(32,32);
                //change grid size with user input
                const changeSize = document.querySelector("#change-size");
                changeSize.textContent = 'Change Size';
                changeSize.addEventListener('click', () => {
                    while (container.firstChild) {
                        container.removeChild(container.firstChild)
                    }
                    alert ("How to Use : For a 16x16 grid enter size = 16")
                    let size = prompt("Enter size of grid (2->100)");
                    if (size <=100) {
                        createGrid(size,size);
                    }else alert("Don't use values over 100 or smaller than 2 \nRefresh the page to enter values again");
                })
                
                
                // Clear all cells button
                const clear = document.querySelector('#clear');
                clear.textContent = 'Clear Sketchpad'
                clear.addEventListener('click',()=>{
                    const allCols = document.querySelectorAll(".col");
            allCols.forEach((node)=>{
            node.style.backgroundColor = 'white';
                })
                console.log(allCols);
                    
                })
                