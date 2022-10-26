var m = 1000;
var pasos = 0;
var i = 0;

console.time('Tiempo total')


function min(z, sortedIndex)
{
	let minNmb = -1
	let valMin = 999999999999
	let n = z.length
	for(let i = 0; i < n; i++)
	{
		let c = z.shift()
	
		if (c <= valMin && i <= sortedIndex){
			minNmb = i
			valMin = c
		}
		z.push(c) 
	}
	return minNmb
}


function insertMin(z, minNmb){
	let valMin = 0
	let n = z.length
	for(let i=0;i<n;i++){
		let c = z.shift()
		if (i != minNmb)
			z.push(c)
		else
			valMin = c
	}
	z.push(valMin)
}

function sortQueue(z){
	for(let i=1;i<z.length+1;i++){
		let minNmb = min(z, z.length - i)
		insertMin(z, minNmb)
    pasos++
	}
}


let z = [];
let random;
 for(i = 0; i < m; i++){
 random = Math.floor(Math.random() * 1000);
 z.push(random);
 };

sortQueue(z)


while (z.length > 0){
	console.log(z.shift()," ")
}
console.timeEnd('Tiempo total')
console.log('Pasos que tomo: '+pasos);