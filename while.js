//print all numbers between -10 and 19

var num=-10;

while(num<20){
	console.log(num)
	num++;
}

//print all even numbers beteween 10 and 40

num=10;

while(num<38){
	console.log(num);
	num=num+2;
}


//print all odd numbers beteween 300 and 333


num=300;
while(num<333){
	if(num%2!==0){

	}else{
		console.log(num);
		num++;
	}
}


//print all numbers divisible by 5 and 3 and between 5 and 50


num=5;

while(num<50){

	if(num%3==0 && num%5==0){
		console.log(num);
	}
}