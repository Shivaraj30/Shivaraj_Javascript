const mySym = Symbol("key1")


const JSuser = {
    name: "Shivaraj",
    "full name": "Shiavraj Moolya",
    [mySym]: "mykey1",
    age: 18,
    location: "Belgaum",
    email: "shivaraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// const JSuser = {
//     name : "Shivaraj",
//     age : "26",
//     email: "shivaraj.m@gmail.com"
// }

// console.log(JSuser["email"])

// console.log(JSuser.email)

// JSuser.email = "shivaraj.m@techtreeit.com"

// console.log(JSuser.email)

// Object.freeze(JSuser)

// JSuser.email = "raj.m@techtreeit.com"
// console.log(JSuser.email)


JSuser.greetings = function(){
console.log("Hello user")
}
console.log(JSuser.greetings());



JSuser.greetingsTwo = function(){
    console.log(`Hello, ${this.name}`)
}
console.log(JSuser.greetingsTwo());

    
