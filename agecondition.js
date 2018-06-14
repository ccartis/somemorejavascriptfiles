var age=prompt("Enter your age")

if(age<0){

	alert("Error, your age cannot be negative");
}

if(age==21){
	alert("Happy 21st birthday");
}

if(age%2==0){
	alert("Age is even");
}else{
	alert("Age is odd");
}

if(Math.sqrt(age)%1==0){
	alert(age+"Is a perfect square and the squareroot is "+Math.sqrt(age));
}