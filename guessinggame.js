var guess=prompt("Enter a random number");

// var guessednumber=(Math.random()*5)+1;
var guessednumber=3;

if(guess<guessednumber){
	alert(guess+" is Too low ");
}else if(guess>guessednumber){
	alert(guess+" is too high" );
}else if(guess==guessednumber){

	alert(guessednumber+" is equalled to "+guess);
}