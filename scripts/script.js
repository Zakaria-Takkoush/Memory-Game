
/* 
    ----- Used Variables -----
*/

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
let player_seq = []       // player order
let comp_seq = []         // computer order
let level = 0;            // game level

/*
    ----- Click Functions -----
*/

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

// computer click functions
function comp_click_green() {
    green_sound.play()
    green.classList.add("compclick")
    setTimeout(function() {;
        green.classList.remove("compclick")
    },150 )
}

function comp_click_red() {
    red_sound.play()
    red.classList.add("compclick")
    setTimeout(function() {;
        red.classList.remove("compclick")
    },150 )
}

function comp_click_yellow() {
    yellow_sound.play()
    yellow.classList.add("compclick")
    setTimeout(function() {;
        yellow.classList.remove("compclick")
    },150 )
}

function comp_click_blue() {
    blue_sound.play()
    blue.classList.add("compclick")
    setTimeout(function() {;
        blue.classList.remove("compclick")
    },150 )
}

// When you lose
function loose () {
    loose_sound.play()
    document.body.classList.add("youloose")
    setTimeout(function() {;
        document.body.classList.remove("youloose")
    },100 )
    game_status[0].innerHTML = "<h1>Game Over, Press Any Key to Restart</h1>"
    start_game ()
}

// start the game function
function start_game () {
    next_round()
    game_status[0].innerHTML = "<h1>Game Started<br>Level 1</h1>"
}

/*
    ----- Random Pattern Generater ----- 
*/

// generate random color
function next_step() {
    const tiles = ["green", "red", "yellow", "blue"]
    const random = tiles[Math.floor(Math.random() * tiles.length)]
    return random
}

// next round
function next_round() {
    level += 1
    game_status[0].textContent = `Level ${level} of 20`
    const next_seq = [...comp_seq]    // copy the computer sequence 
    next_seq.push(next_step())        // append a new random color from the next_step function
    play_round(next_seq)                // generate the new sequence
    cannot_click ()                    // call the functions that disables click event listerns
    setTimeout(() => {                 // set a delay between computer turn and human turn
        user_turn(level);
      }, level * 600 + 1000);
}

// play each round
function play_round(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] = "green") 
        { comp_click_green()}
        else if (arr[i] = "red")
        { comp_click_red()}
        else if (arr[i] = "yellow") 
        { comp_click_yellow()}
        //if (arr[i] = "blue")
        else
        { comp_click_blue()}
    }
}

// user turn
function user_turn () {
    can_click ()
}

// allow user click
function can_click () {
    green.addEventListener("click" , click_green)
    red.addEventListener("click" , click_red)
    yellow.addEventListener("click" , click_yellow)
    blue.addEventListener("click" , click_blue)
}

// prevent user click
function cannot_click () {
    green.removeEventListener("click" , click_green)
    red.removeEventListener("click" , click_red)
    yellow.removeEventListener("click" , click_yellow)
    blue.removeEventListener("click" , click_blue)
}

// win the game
function win () {
    
}

// check player order with computer order
function check () {
    if (player_seq !== comp_seq) {
        loose()
        play()
    }
    if (player_seq.length == 15) {
        game_win === true
    }
    if (level === player_seq.length) {
        level++
    }
}


// onclick event listeners
/*
green.addEventListener("click" , click_green)
red.addEventListener("click" , click_red)
yellow.addEventListener("click" , click_yellow)
blue.addEventListener("click" , click_blue)
*/


// When page loaded, call the start_game function

document.addEventListener('keypress', start_game);