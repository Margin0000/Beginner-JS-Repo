// function

function hello() {
    console.log('Hello')
}
hello()

const addition = function(num1, num2) {
    return num1 + num2
}
const addition2 = (num1, num2) => num1 + num2

const total = addition(2, 3)
console.log('total >', total) 

const total2 = addition2(4, 5)
console.log('total2 >', total2)



// conditions

if (10 > 5) {
    console.log('Yes 1')
} else if (20 > 5) {
    console.log('Yes 2')
}

if (10 > 5) {
    console.log('Yes 1.1')
}
if (20 > 5) {
    console.log('Yes 2.1')
}

const age = 20
if (age > 60) {
    console.log('Old')
} else if (age < 20) {
    console.log('Young')
} else {
    console.log('Middle age')
}

const brand = 'Lada'

switch(brand) {
    case 'BMW':
        console.log('BMW')
        break
    case 'Tesla':
        console.log('Tesla')
        break
    default:
        console.log('Not listed')
}

const myCar = 'BMW' === 'Audi' ? 'You are lucky' : 'You are not lucky'
console.log(myCar)

// string, number, boolean, undefined, null, object, BigInt, Sympol 

const name = 'Oleg'

const number = 12

let variableOne

let variableTwo = null

console.log('type of the variabl', typeof(variableOne))

let inStock = true

const car = {
    brand: 'BMW',
    color: 'black',
    year: 2022,
    inStock: true
}

console.log('brand:', car.brand)

// var let const

let score 
score = 1
score = 2
console.log('score', score)

const personName = 'Alex'
console.log('personName', personName);