
function contains(v) {
let n = this.head;

while (n) {
if (n.data === v) {
  console.log("¿Exists?")
return true
}

n = n.next
}
return false
}

function getTail(){
  console.log("Tail: ",this.tail)
  return this.tail
}