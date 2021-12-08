// loop

const products = ['mushroom', 'potato', 'orange', 'carrot']

products.forEach(function(item) {
    console.log('product >>>', item)
})

const logIngredients = function(ingredient, index) {
    if (index === (products.length -1) ) {
        console.log('the last ingredient >>>', ingredient)
    }
}

products.forEach(logIngredients)

console.log('');


// object

const newCar = {
    brand: 'BMW',
    year: 2022,
    color: 'red',
    options: ['diesel', 'sport seats'],
    inStock: true,
    drive: function() {
        return `${this.brand} is rock!`
    },
    drive2: () => {
        return `This car is rock!`
    },
    drive3() {
        return `${this.brand} is rock!`
    },
}

console.log('car >>>', newCar)
console.log(newCar.year)
console.log(newCar['year'])
console.log(newCar.model)
console.log(newCar.drive3())

// array

const students = ['Alex', 'Izi', 'George']
console.log(Array.isArray(students)) // instead of typeOf()
console.log('student[0] >>>', students[0])
console.log(students.includes('George')) // ture/false
console.log(students.indexOf('George')) // index/-1

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