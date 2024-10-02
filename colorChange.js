let text = document.getElementById("text")
let color = document.getElementById("wrap")
let button = document.getElementById("button")

let hexVal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener("click",hexValue)

function randomValue(){
        let val = Math.floor(Math.random()*16)
        return hexVal[val];
}

function hexValue(){
    let value = "#";
    for(let i=0;i<6;i++){
        value = value + randomValue();
    }
    color.style.backgroundColor = value;
    text.innerHTML = value;
}

