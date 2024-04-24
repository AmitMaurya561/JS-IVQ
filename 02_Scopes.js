/*
let a = 40 

if(true){
let a = 20
const b = 22
var c = 10 // var is g global scope it can be accessible from anywhere

console.log("INNER:", a) // this will print a bcoz we have print it in block scope
}

 console.log(a) // a is not print bcoz it declares in a scope 
// console.log(b) // b is not print bcoz it declares in a scope 
console.log(c)
 
*/

// ####################################
// this is also a closure 
function one(){
    const username = 'amit'

    function two(){
        const webs = 'google'
        console.log(username)
    }
    // console.log(webs) // not print becoz we are printing it out side of the scope 

    two()
}

one()


