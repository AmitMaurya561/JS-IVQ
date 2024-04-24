// function myFunction(){
//     console.log("Amit")
// }

// myFunction();
// ###############################
// function addTwoNumbers(N1, N2){
//     console.log(N1 + N2)
// }

// addTwoNumbers(2, 4)

// ##############################

function addTwoNumbers(N1, N2){
      
    // let res = N1 + N2
    return N1 + N2
    // console.log(N1 + N2)
}

const res = addTwoNumbers(3, 5)

// console.log("Result: "+ res);


function loginUserMessage(username = 'sam'){
    if (username === undefined) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

//    console.log(loginUserMessage())
//    console.log(loginUserMessage("amit"))

// ######################
function calculateCartPrice(...num1){ // rest operator returns array 
   return num1
}

// console.log(calculateCartPrice(2,12,23))

const user = {
    username: "panki",
    price:  1999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
 handleObject({
    username: 'sam',
    price: 199
 })

//  ####################

const myNewArray = [100,200,300,400,500]
function returnSecondValvue(getArray){
    return getArray[1]
}

console.log(returnSecondValvue(myNewArray))