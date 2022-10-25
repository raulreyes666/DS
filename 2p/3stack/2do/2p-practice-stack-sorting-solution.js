var i = 0;
var m = 1000;
var pasos = 0;


console.time('Tiempo total')
	
	function stackSorting(x){
		let tmpStack = [];
		while (x.length > 0)
		{
		
			let xPoped = x.pop();

		
			while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] > xPoped)
			{
			
				x.push(tmpStack[tmpStack.length - 1]);
				tmpStack.pop()
			}

			
			tmpStack.push(xPoped);
		}
		return tmpStack;
	}

	let x = [];
let random;

 for(i = 0; i < m; i++){
 random = Math.floor(Math.random() * 1000);
 x.push(random);
 };
let numeros = [];
numeros.push(x);
  
	let tmpStack = stackSorting(x);

	while (tmpStack.length > 0)	{
		
    console.log(tmpStack[tmpStack.length - 1] + " ");
		tmpStack.pop();
	pasos++}


console.timeEnd('Tiempo total');
console.log('Pasos que tomo '+pasos);
