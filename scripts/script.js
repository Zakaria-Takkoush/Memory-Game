// declare box vairables
var game = document.getElementById("game_box")
var green = document.getElementById("green_box")
var red = document.getElementById("red_box")
var yellow = document.getElementById("yellow_box")
var blue = document.getElementById("blue_box")

// sound variables
var green_sound = new Audio("assets/sounds/green.mp3")
var red_sound = new Audio("assets/sounds/red.mp3")
var yellow_sound = new Audio("assets/sounds/yellow.mp3")
var blue_sound = new Audio("assets/sounds/blue.mp3")

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

}

// onclick event listeners
green.addEventListener("click" , click_green)
red.addEventListener("click" , click_red)
yellow.addEventListener("click" , click_yellow)
blue.addEventListener("click" , click_blue)
