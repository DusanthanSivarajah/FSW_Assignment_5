
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
    gamePattern.push(colorSelect)
    setTimeout(function(){
    colorSelect.classList.remove("pressed")},100);   
    console.log(gamePattern)
    level++;
    document.querySelector("#level-title").textContent=`Level ${level}`
}

function checkClicked(color){
    userClickedPattern.push(color)
    console.log(userClickedPattern)
    patternTest(userClickedPattern.length -1);
}

function patternTest(currentLevel){
    let bg= document.querySelector("body");
    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(()=>{
            userClickedPattern=[];
            nextColor();
        },1000);
      }
        

    }else{
        bg.classList.add("game-over");
        document.querySelector("#level-title").textContent="Game Over, Press Any Key to Restart";
        setTimeout(()=> bg.classList.remove("game-over"),200);
        restartGame();
       
    }

}

function restartGame(){
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;

}


document.addEventListener('keypress', () => {
        
    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`;
        started = true;   
        nextColor(); 
    }
});

red.addEventListener("click",()=>{
    checkClicked(red)
 })
 blue.addEventListener("click",()=>{
     checkClicked(blue)
 })
 green.addEventListener("click",()=>{
     checkClicked(green)
 })
 yellow.addEventListener("click",()=>{
     checkClicked(yellow)
 })







// now that the clicks been set, and shown in the array
// i need to compare the clicks with the array 

// if it matches with the array then continue to look for 
// thee next color 

// if it doesnt match then change the background red and reset


