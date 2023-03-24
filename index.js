//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}


//practice 3
// let myPoints = 3
// function add3Points(){
//     myPoints += 3
// }
// function remove1Points() {
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()
// console.log(myPoints)



// //practice 2
// let name = "Areeb"
// let greetings = "Hi there"
// function greets() {
//     console.log(greetings + ", " + name +"!")
// }
// greets()




//practice 1
// let name = "Areeb"
// let greetings = "Hi, my name is "
// let myGreetings = greetings + name
// console.log(myGreetings)



//increment
// let lapCompleted = 0
// function increment() {
//     lapCompleted = lapCompleted +1
// }
// increment()
// increment()
// increment()
// console.log(lapCompleted)



//adding numbers
// let lap1 = 43
// let lap2 = 42
// let lap3 = 41
// function lap() {
//     let total = 0
//     total = lap1 + lap2 + lap3
//     console.log(total)
// }
// lap()