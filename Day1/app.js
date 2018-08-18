//working with console

console.log(123)

console.log('hello world')

console.log(true)

//var greeting = "hello"

console.log(greeting)

console.log([1,3,4,5,6])

console.log({a:1,b:2})

console.table({a:1,b:2})

console.error('This is some error')

console.warn('This is a warning')

console.clear();

console.time('Hello')
    console.log('ahahahaha')
    console.log('ahahahaha')
console.timeEnd('Hello')

//var, let, const

var name = 'Mukul Latiyan'

name = 'Jyoti Dagar'

console.clear()

console.log(name)

var greeting
greeting = ' was beautiful'

// can start with $ or _ (nothing else)
console.log(name +greeting)

var firstName = 'Mukul'
var lastName = 'latiyan'
var fullName = firstName +' '+ lastName
console.log(fullName)


//Const 

//const name = 'Mukul'
console.log(name)

//const hero
//name = 'latiyan'

const object = {
    name : 'Mukul',
    age: '20'
}

object.name = 'Rahul'
object.age = 30
console.log(object)

const numbers = [1,2,3,4]
numbers.push(6)
console.log(numbers)