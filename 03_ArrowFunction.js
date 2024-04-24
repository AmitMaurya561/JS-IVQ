const user = {
    username: 'amit',
    price: 222,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to server`)
        // console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// ############################################
// this code returns undefined

// function glass(){
//     const username = 'amit'
//     console.log(this.username)
// }

// glass()

// #################################################

// const glass = () => {
//     let username = 'amit'
//     console.log(this)
// }

// glass()

// #####################################3
// explicit method
const addOne = (num1, num2) =>{
    return num1 + num2
}

console.log(addOne(2,4))

// 2nd method
// implicit type
const  addTwo = (num3, num4) => num3 + num4 

console.log(addTwo(9,5))