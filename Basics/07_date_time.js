let myDate = new Date()
// console.log(myDate.toString())

// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let createdDate = new Date("10-12-2024")

// console.log(createdDate.toDateString())
// console.log(Math.floor(Date.now()/1000))
// console.log(createdDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let newDate = new Date()
const storedNumber = newDate.getDay()

if (storedNumber == 4) {
    console.log("Thursday")
} else {
    console.log("other Day")
}


