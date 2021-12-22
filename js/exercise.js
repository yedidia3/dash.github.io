window.onload = function () {

  var seconds = 20;
//    var minutes = 360;
  var rest = true;
  var interval;

  var intervalTime = 20;
  var breakTime = 10; 

  var settingsButton = document.getElementById("settings");
  var intervalInput = document.getElementById("intervalTime");
  var breakInput = document.getElementById("breakTime");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");
  
  var workoutSpan = document.getElementById("mins");
    
    var drill =  document.querySelector(".conditioning");
    
  settingsButton.onclick = function() {
    intervalTime = Math.floor(intervalInput.value * 1);
    breakTime = Math.floor(breakInput.value * 1);
    reset();
  }

  startButton.onclick = function() {
    rest = false;
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function() {
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }
    
function countdownWorkout() {
    minutes -= 1;
    workoutSpan.innerText = minutes;
    checkForStateChange();
  }

    //function for beep sounds at 3 sec countdown
    
  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;
      changeToRest();
        randomCondition(conditioning);
    } else if (seconds == 0 && rest == true) {
      seconds = intervalTime + 1;
      rest = false;
      changeToGo();
    }
  }

  function changeToRest() {
    $("body").css("background", "purple");
    statusHeader.innerText = "Rest";
  }

  function changeToGo() {
    $("body").css("background", "green");
    statusHeader.innerText = "Go!";
  }
    
    
//function for full workout counter 

    
//EXERCISE TYPE

var conditioning = ["Burpees", "V-ups", "Toe-taps", "Shoulder Taps", "Tricep Push-ups", "Walking Push Plank", "Up and Down Planks", "Up and Down Planks with Push Up", "X-ups", "Hollow Hold", "Glute Bridges", "Mountain Climbers", "Forward Lunge", "Backward Lunge", "Surrenders", "Jump Squat", "180 Jump Squat", "Jumping Jacks", "Flutter Kicks", "Scissor Kicks", "Bicycle Crunches", "Leg Lifts", "Plank", "Jog", "Caterpillar Walk", "High Knees", "Sit up with Jab-Cross", ""];

var kickboxing = [
   "jab",
    "cross",
    "left hook",
    "right hook",
    "left upper cut",
    "right uppercut",
    "left body hook",
    "right body hook",
    "body jab",
    "body cross",
    "left front kick",
    "right front kick",
    "left side kick",
    "right side kick",
    "left roundhouse kick",
    "right roundhouse kick",
    "duck"
];

var contortion = [
   "handstands",
    "back bends",
    "split practice"
];

//GENERATE CONDITIONING EXERCISE
function randomCondition(conditioning){
    
    
    var conditioningLength = conditioning.length;
    var randomNumber = Math.floor(Math.random() * conditioningLength);
    var randomDrill = conditioning[randomNumber];
    
    //return Drill
    drill.innerHTML = randomDrill;
    
    //new drill showing at rest
    
    
};

randomCondition(conditioning);  




}

