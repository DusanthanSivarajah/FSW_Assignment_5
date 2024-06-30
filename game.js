
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");


const buttonColors = [red, blue, green, yellow];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;



function getRandomColor(color){
    let randomNumber= Math.floor(Math.random()*4);
    return color[randomNumber]
}
function nextColor(){
    let colorSelect=getRandomColor(buttonColors)
    colorSelect.classList.add("pressed");
    
    setTimeout(function(){
    colorSelect.classList.remove("pressed")},600);

}



document.addEventListener('keypress', () => {
        
    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`;
        started = true;     
    }
    
    nextColor();


});


