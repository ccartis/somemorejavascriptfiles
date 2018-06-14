


function printReverse(firstarray){

	// for(var i=firstarray.length-1; i>=0; i--){

	// 	console.log(firstarray[i]);
	// }

	firstarray.reverse();

	console.log(firstarray);




}

function printSort(firstarray){


	
	firstarray.sort();

	for(var i=0; i<firstarray.length; i++){

	console.log(firstarray[i]);
	return firstarray;}
}

printReverse([3,4,54,800]);

printReverse(["a","b","3","d","c"]);

printSort([44,88,2,5]);

function isUniform(arr){

	var first=arr[0];
	for(var i=1; i<arr.length; i++){

		if(arr[i]!==first){
			return false;
		}
	}

	return true;
}

function sumArray(arr){

	var sum=0;

	for(var i=0; i<arr.length; i++){

		sum+=arr[i];
		console.log("Sum is "+sum);


	}


	return sum;
}

function max(arr){

	var maxi=arr[0];

	for(var i=0; i<arr.length; i++){

		if(arr[i]>maxi){
			maxi=arr[i];
		}
	}


	return maxi;
}


function min(arr){

	var mini=arr[0];

	for(var i=0; i<arr.length; i++){

		if(mini>arr[i]){
			mini=arr[i];
		}
	}

	return mini;
}