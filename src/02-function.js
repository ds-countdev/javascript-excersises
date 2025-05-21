//values default
function sayHello(firstName = 'diego'){
    return `hello world ${firstName}`;
}

//anonimus function
const sayHelloTwo = function(firstName = 'diegoo'){
    return `hello world ${firstName}`;
}

//arrow function
const sayHelloThree = (firstName = 'diego') =>{
    return  `hello world ${firstName}`
}

//short arrow function
const sayHelloFour = firstName => `hello world ${firstName}`

console.log(sayHelloFour('alex'))