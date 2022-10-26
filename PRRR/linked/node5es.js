
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(data) {
    this.data = data
    this.next = null
}


LinkedList.prototype.getHead = function () { 
    return this.head.data
}


LinkedList.prototype.getTail = function () { 
    return this.tail
}


LinkedList.prototype.prepend = function (data) { 
    if (!this.head) {
        this.head = new Node(data)
        this.tail = data
    }
      
    else {
        let ref = this.head;
        this.head = new Node(data)
        this.head.next = ref
    }
}


LinkedList.prototype.append = function (data) { 
  
    if (!this.head) {
        this.head = new Node(data)
        this.tail = data
    }
      
    else {
        let ref = this.head;
        while (ref.next) {
            ref = ref.next
        }
      
        ref.next = new Node(data)
        this.tail = data
   
    }
  
}

// Convierte a string
LinkedList.prototype.toString = function () { 
    let ref = this.head;
    let string = ""
    while (ref) {
        string += ref.data + " "
        ref = ref.next
    }
    return string
}


LinkedList.prototype.traverse = function () { 
  
    let ref = this.head;
    let i = 0
  
    while (ref) {
        console.log( "("+i+ ")", ref.data)
      
        ref = ref.next
        i++
    }
    console.log('\n')
}


LinkedList.prototype.contains = function (data) { 
    let ref = this.head
    while (ref) {
        if (ref.data === data) {
            console.log('El nodo ' + data + ' está en la lista')
            return true
        }
        ref = ref.next
    }
    console.log('El nodo [' +data+ '] no está en la lista')
    return false
}


LinkedList.prototype.insertAfter = function (input, data) { 
    let ref = this.head
    let newNode = new Node(input)
    while (ref) {
        if (ref.data === data) {
            newNode.next = ref.next
            ref.next = newNode

            console.log('El nodo ' + input + ' se ha insertado después del nodo ' + data)
            return true
        }
        ref = ref.next
    }
    console.log('El nodo [' +data+ '] no está en la lista')
    return false
}


LinkedList.prototype.insertBefore = function (input, data) { 
  
    let ref = this.head
    let newNode = new Node(input)

    if (ref.data === data) {
        newNode.next = ref
        this.head = newNode

        console.log('El nodo '  + input + ' fue insertado antes del nodo '  + data )
        return true
    }
    while (ref) {

        if (ref.next.data === data) {
            newNode.next = ref.next
            ref.next = newNode

            console.log('El nodo ' + input + ' fue insertado antes del nodo ' + data )
            return true
        }
        ref = ref.next
    }
}

export default LinkedList


export { Node }