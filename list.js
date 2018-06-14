console.log("CONNECTED");
var todos=["Buy new turtole"];
var input=prompt("What would you like to do ");

if(input=="list"){
	listTodos();
}else if(input==="new"){
	addTodo();
}else if(input==="delete"){

	deleteTodo();
}
i


while(input!=="quit"){

	if(input=="list"){
	console.log(todos);
}else if(input==="new"){

}


input=prompt("What would you like to do ");

}

function listTodos(){

	console.log("******************")
	todos.forEach(function(todo,i){



		console.log(i+"   :     "+todo);


	});

}

function addTodo(){


var newTodo=prompt("Enter new todo");

	todos.push(newTodo);
	console.log("Added toDo");
}

function deleteTodo(){

//ask for index of todo to be deleted
	//delete that todo

	var index=prompt("Enter the index of todo to delete");

	//delete that todo
	//splice()

	todos.splice(index,1);
	console.log("Deleted Todo");
}