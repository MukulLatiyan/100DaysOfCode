//working with console

console.log(123) //console numbers

console.log('hello') //console strings

console.log(true) //console boolean values

console.log([1,2,3,4,5]) // console an array

console.log({name:'Mukul',age:'21'}) //console objects

console.table({name:'John Doe',age:'21'})//console object in form of a table

var myArray=[{a:1,b:2,c:3},{a:1,b:2,c:3,d:4},{k:11,f:22},{a:1,b:2,c:3}]

console.table(myArray)//console array in form of a table

console.error('this is an error. duhh!') //console an error

console.warn('this is a warning') //console a warning

console.time('hello') // find the time execution of a code block
    console.log('this')
    console.log('will')
    console.log('tell')
    console.log('you')
    console.log('about')
    console.log('the')
    console.log('time')
    console.log('spent')
    console.log('to')
    console.log('run')
    console.log('all')
    console.log('these')
    console.log('console.logs')
console.timeEnd('hello')

//Convert Your Browser Into An Editor
document.body.contentEditable = //true(remove the comment)

//select dom elements
console.log(document.querySelector('h1').textContent)

//change dom elements
document.querySelector('p').innerHTML = 'hell yeah! this is awesome!'

// clear you console
console.clear()