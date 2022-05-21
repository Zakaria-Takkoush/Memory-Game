// declare box vairables
var game = document.getElementById("game_box")
var green = document.getElementById("green_box")
var red = document.getElementById("red_box")
var yellow = document.getElementById("yellow_box")
var blue = document.getElementById("blue_box")

// sound variables
var green_sound = new Audio("assets\sounds\green.mp3")
var red_sound = new Audio("assets\sounds\red.mp3")
var yellow_sound = new Audio("assets\sounds\yellow.mp3")
var blue_sound = new Audio("assets\sounds\blue.mp3")

// sound event listerners
green.addEventListener("click", green_sound.play)
