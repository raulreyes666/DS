var array = [];
var m = 10;
var pasos = 0;
var i = 0;
	// Javascript program to sort a stack using
	// a auxiliary stack.
	
	// This function return the sorted stack
	function sortstack(input)
	{
		let tmpStack = [];
		while (input.length > 0)
		{
			// pop out the first element
			let tmp = input.pop();

			// while temporary stack is not empty and
			// top of stack is greater than temp
			while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] > tmp)
			{
				// pop from temporary stack and
				// push it to the input stack
				input.push(tmpStack[tmpStack.length - 1]);
				tmpStack.pop()
			}

			// push temp in temporary of stack
			tmpStack.push(tmp);
		}
		return tmpStack;
	}

	let input = [];
let random;
 for(i = 0; i < m; i++){
 random = Math.floor(Math.random() * 10);
 input.push(random);
 };
let numeros = [];
numeros.push(input);
  


	// This is the temporary stack
	let tmpStack = sortstack(input);


	while (tmpStack.length > 0)
	{
		console.log(tmpStack[tmpStack.length - 1] + " ");
		tmpStack.pop();
	}