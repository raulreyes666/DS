var m = 1000;
var pasos = 0;
var i = 0;

console.time('Tiempo total')


function min(q, sortedIndex)
{
	let minIndx = -1
	let valMin = 999999999999
	let n = q.length
	for(let i = 0; i < n; i++)
	{
		let curr = q.shift()
	
		if (curr <= valMin && i <= sortedIndex){
			minIndx = i
			valMin = curr
		}
		q.push(curr) 
	}
	return minIndx
}


function insertMin(q, minIndx){
	let valMin = 0
	let n = q.length
	for(let i=0;i<n;i++){
		let curr = q.shift()
		if (i != minIndx)
			q.push(curr)
		else
			valMin = curr
	}
	q.push(valMin)
}

function sortQueue(q){
	for(let i=1;i<q.length+1;i++){
		let minIndx = min(q, q.length - i)
		insertMin(q, minIndx)
    pasos++
	}
}


let q = [];
let random;
 for(i = 0; i < m; i++){
 random = Math.floor(Math.random() * 1000);
 q.push(random);
 };

sortQueue(q)


while (q.length > 0){
	console.log(q.shift()," ")
}
console.timeEnd('Tiempo total')
console.log('Pasos '+pasos);