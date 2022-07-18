
const generateColors = () =>{
    
    let colorValue = document.querySelector("#colorValue");
    let color = Math.random();
        color = Math.random().toString(16).substring(4, 10);

    colorValue.innerHTML = "#" + color;
    console.log(color);

    document.body.style.backgroundColor = "#" + color;
}

let generate = document.getElementById("generate");
generate.addEventListener("click" , generateColors);

generateColors();