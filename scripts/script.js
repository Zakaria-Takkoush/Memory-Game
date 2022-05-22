// declare box vairables
var game = document.getElementById("game_box")
var green = document.getElementById("green_box")
var red = document.getElementById("red_box")
var yellow = document.getElementById("yellow_box")
var blue = document.getElementById("blue_box")
var game_status = document.getElementsByClassName("header")

// sound variables
var green_sound = new Audio("assets/sounds/green.mp3")
var red_sound = new Audio("assets/sounds/red.mp3")
var yellow_sound = new Audio("assets/sounds/yellow.mp3")
var blue_sound = new Audio("assets/sounds/blue.mp3")
var loose_sound = new Audio("assets/sounds/wrong.mp3")

// function variables
let player_order = []       // player order
let comp_order = []         // computer order
let flash                   // computer chosen click
let round                   // game level
let comp_turn               // identify turn (user pc)
let game_start              // game start        
let game_win                // game end win

// onclick functions
function click_green () {
    green_sound.play()
    green.classList.add("onclick")
    setTimeout(function() {;
        green.classList.remove("onclick")
    },150 )
}

function click_red () {
    red_sound.play()
    red.classList.add("onclick")
    setTimeout(function() {;
        red.classList.remove("onclick")
    },150 )
}

function click_yellow () {
    yellow_sound.play()
    yellow.classList.add("onclick")
    setTimeout(function() {;
        yellow.classList.remove("onclick")
    },158 )
}

function click_blue () {
    blue_sound.play()
    blue.classList.add("onclick")
    setTimeout(function() {;
        blue.classList.remove("onclick")
    },150 )
}

function loose () {
    loose_sound.play()
    document.body.classList.add("youloose")
    setTimeout(function() {;
        document.body.classList.remove("youloose")
    },100 )
    game_status[0].innerHTML = "<h1>Game Over, Press Any Key to Restart</h1>"
}

// Generate Random Sequence
var get_sequence = () => {
    var pick = [green, red, yellow, blue]
return pick[Math.floor(Math.random() * round.length)];
}

// start the game
document.addEventListener("keypress", function(event) {
	game_start = true
    play()
});

function play () {
    player_order = []       
    comp_order = []         
    flash = 0              
    game_win = false
    comp_turn = true
    //console.log("started")

}

// win the game
function win () {
    
}

// check player order with computer order
function check () {
    if (player_order !== comp_order) {
        loose()
        play()
    }
    if (player_order.length == 15) {
        game_win === true
    }
    if (level === player_order.length) {
        level++
    }
}

// onclick event listeners
green.addEventListener("click" , click_green)
red.addEventListener("click" , click_red)
yellow.addEventListener("click" , click_yellow)
blue.addEventListener("click" , click_blue)
