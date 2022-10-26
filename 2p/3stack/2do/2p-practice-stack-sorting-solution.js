var i = 0;
var m = 1000;
var pasos = 0;


console.time('Tiempo total')
	
	function stackSorting(x){
		let stack = [];
		while (x.length > 0)
		{
		
			let xPoped = x.pop();

		
			while (stack.length > 0 && stack[stack.length - 1] > xPoped)
			{
			
				x.push(stack[stack.length -1]);
				stack.pop()
			}

			
			stack.push(xPoped);
		}
		return stack;
	}

	let x = [];
let random;

 for(i = 0; i < m; i++){
 random = Math.floor(Math.random() * 1000);
 x.push(random);
 };
let numeros = [];
numeros.push(x);
  
	let stack = stackSorting(x);

	while (stack.length > 0)	{
		
    console.log(stack[stack.length - 1] + " ");
		stack.pop();
	pasos++}


console.timeEnd('Tiempo total');
console.log('Pasos que tomo '+pasos);
