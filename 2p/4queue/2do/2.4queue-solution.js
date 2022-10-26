/** 
 *
 * your solution here
 *
 */



function Queue() {
  this.dataStore = []
  this.top = 5 
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.isFull = isFull
  this.isEmpty = isEmpty
}

function enqueue(name) {
  if (this.isFull())
    console.log('Cola llena' + "\n")
  else {
    console.log( 'Se añadio a '+ name)
    this.dataStore.push(name)
    
  }
}

function dequeue() {
  if (this.isEmpty())
    console.log('La cola esta Vacia')
  else {
    console.log(this.dataStore.shift(), 'fue desprendido')
  }
}

function front() {
  return this.dataStore[1]
}

function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n"
  }
  return retStr
}

function isFull() {
  if (this.dataStore.length === this.top) {
    return true 
  }
  else {
    return false 
  }
} 

function isEmpty() {
  if (this.dataStore.length === 0) {
    return true 
  }
  else {
    return false 
  }
} 


let q = new Queue()
q.enqueue("Raul")
q.enqueue("Paulina")
q.enqueue("Ximena")
q.enqueue("Andrea")
q.enqueue("Marlenne"+"\n")

q.enqueue("isFull12") 
q.enqueue("isFull13") 



console.log(q.toString())

console.log("Primera elemento de la cola:", q.front());
console.log("Ultimo elemento de la cola:", q.back());

console.log()
q.dequeue()
console.log()

// console.log(q.toString())

console.log('¿Is queue Full?',q.isFull(),"\n")

console.log('¿Is queue Empty?',q.isEmpty())