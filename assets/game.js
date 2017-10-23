var randomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var selectedNum;
var score = 0;
var wins = 0;
var losses = 0;

function checker() {
	if (score === randomNum) {
	wins ++;
	console.log("Winner, Winner Chicken Dinner!!");
	$("#wins").html("wins: " + wins);
	$("#message").html("Winner Winner Chicken Dinner!!!");
	randomNum = Math.floor((Math.random() * 101) + 19);
	console.log(randomNum);
	$("#randomNum").html(randomNum);
	score = 0;

} else

if (score > randomNum) {
	losses++;
	console.log(losses);
	$("#losses").html("losses: " + losses);
	$("#message").html("Sorry pal, YOU LOSE!");
	randomNum = Math.floor((Math.random() * 101) + 19);
	console.log(randomNum);
	$("#randomNum").html(randomNum);
	score = 0;
	};
};




$("#score").html(score);
//random number is generated
var randomNum = Math.floor((Math.random() * 101) + 19);
console.log(randomNum);
$("#randomNum").html(randomNum);

//random number selected for crystal 1
var crystal1 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 1 is worth " + crystal1);

// random number selected for crystal 2
var crystal2 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 2 is worth " + crystal2);

// random number selected for crystal 3
var crystal3 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 3 is worth " + crystal3);

//random nuber selected for craystal 4
var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 4 is worth " + crystal4);

//onclicks event listeners
$("#crystal1").on("click", function(){
	console.log("Crystal 1 button click works!");
	score += crystal1;
	$("#score").html(score);
	checker();
});

$("#crystal2").on("click", function(){
	console.log("Crystal 2 button click works!");
	score += crystal2;
	$("#score").html(score);
	checker();
});

$("#crystal3").on("click", function(){
	console.log("Crystal 3 button click works!");
	score += crystal3;
	$("#score").html(score);
	checker();
});

$("#crystal4").on("click", function(){
	console.log("Crystal 4 button click works!");
	score += crystal4;
	$("#score").html(score);
	checker();
	

});
