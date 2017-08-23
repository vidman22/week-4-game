// Variables
var targetScore = Math.floor((Math.random() * 102) + 19);
var guessSum = 0; 
var wins = 0;
var losses = 0;
var crystals = [];
var crystalValues =[];

// HTML display
$(".crystalSum").html(guessSum);
$(".wins").html(wins);
$(".losses").html(losses);

// Console log variables
console.log(crystalValues);

// Reset the game when the goal is reached or overshot
function reset() {
	targetScore = Math.floor((Math.random() * 102) + 19);
	guessSum = 0;


	$(".crystalSum").html(guessSum);
	$(".goalNumber").html(targetScore);

	for (i=0; i < 4; i++) {
	var values = Math.floor((Math.random() * 12) + 1);

	crystalValues.push(values);
	}

}

function startGame() {
	targetScore = Math.floor((Math.random() * 102) + 19);
	guessSum = 0;

	$(".goalNumber").html(targetScore);

// Create a random values for the crystal array

for (i=0; i < 4; i++) {
	var values = Math.floor((Math.random() * 12) + 1);

	crystalValues.push(values);
}

// Add classes and attributes to the crystal images
for (var j=0; j < crystalValues.length; j++) {

	var icons = [
		 "assets/images/cry11.png",
		 "assets/images/cry2.png",
		 "assets/images/cry3.png",
		 "assets/images/cry4.png",
	];

	var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", icons[j]);

    imageCrystal.attr("data-crystalvalue", crystalValues[j]);

    $("#crystals").append(imageCrystal);
  }


// Add up the values of the crytals when clicked
$(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    guessSum += crystalValue;
	console.log("this" + targetScore);
    $(".crystalSum").html(guessSum);

    if (guessSum === targetScore) {
      wins++;
      
      console.log("Sum: " + guessSum);
      $(".wins").html(wins);
      reset();
      return;

    }
    console.log("this" + targetScore);
    if (guessSum >= targetScore) {
      losses++;
      $(".losses").html(losses);
      reset();
      return;
    }
    
  });

}



startGame();
