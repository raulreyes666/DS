import Node from '../../../../PRRR/linked/node5es.js'

let lista = new Node();

lista.prepend('b','\n')
console.log(lista,'\n')



lista.insertAfter('c','b','\n') 
lista.traverse()



lista.insertBefore('c','b','\n') 
lista.traverse()


