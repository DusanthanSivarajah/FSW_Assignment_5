
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const hover= document.querySelector(".btn");

const redSound = new Audio('assets/sounds/red.mp3');
const blueSound = new Audio('assets/sounds/blue.mp3');
const greenSound = new Audio('assets/sounds/green.mp3');
const yellowSound = new Audio('assets/sounds/yellow.mp3');
const wrongSound = new Audio('assets/sounds/wrong.mp3');



red.addEventListener("mouseenter",()=> red.classList.add("pressed") );
red.addEventListener("mouseleave",()=> red.classList.remove("pressed") );
blue.addEventListener("mouseenter",()=> blue.classList.add("pressed") );
blue.addEventListener("mouseleave",()=> blue.classList.remove("pressed") );
green.addEventListener("mouseenter",()=> green.classList.add("pressed") );
green.addEventListener("mouseleave",()=> green.classList.remove("pressed") );
yellow.addEventListener("mouseenter",()=> yellow.classList.add("pressed") );
yellow.addEventListener("mouseleave",()=> yellow.classList.remove("pressed") );



const buttonColors = [red, blue, green, yellow];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


const buttonSounds = {
    red: redSound,
    blue: blueSound,
    green: greenSound,
    yellow: yellowSound
  };


function getRandomColor(color){
    let randomNumber= Math.floor(Math.random()*4);
    return color[randomNumber]
}
function nextColor(){
    let colorSelect=getRandomColor(buttonColors);
    colorSelect.classList.add("pressed"); 
    gamePattern.push(colorSelect);
    buttonSounds[colorSelect.id].play();
    setTimeout(function(){
    colorSelect.classList.remove("pressed")},100);   
    console.log(gamePattern);
    level++;
    document.querySelector("#level-title").textContent=`Level ${level}`;
}

function checkClicked(color){
    userClickedPattern.push(color);
    buttonSounds[color.id].play();
    console.log(userClickedPattern);
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
        wrongSound.play()
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






