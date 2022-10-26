class Stack {
  
    constructor(){
        this.data = []
        this.top =5//stack size
      
    }

  
    push(a){
        if (this.isFull())
            console.log('pila llena')
       
        
        else{
            this.data.push(a)
            console.log(a,'agregado')
        }
    }

    peek(){
      
        return this.data[this.data.length-1]
    }

    pop(){
        if (this.isEmpty())
            console.log('pila vacia')
        else
            console.log(this.data.pop(),'eliminado')
      
    }

    isEmpty(){
        if (this.data.length === 0)
          
            return true
          
        else
          
            return false
    }

    isFull(){
      
        if (this.data.length === this.top)
            return true
        else
            return false
      
    }

    size(){
      
     return ('total '+ this.data.length)
      
    }

    search(k){
    for(let i = 0; i < this.data.length; i++){
        if(this.data[i] === k){
            return i
        
        }
    }  
    return -1
}  
    
    traverse(){}

    toString(){}
  
    makeEmpty(){
      
        this.data = []
    }
}

let s = new Stack()
s.push(4)
s.push(0)
s.push(3)
s.push(2)
s.push(1)
s.push(5)
console.log(s.search(4));
console.log('Tamaño',s.size())

console.log(s.peek())
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log('Tamaño',s.size())
s.pop()