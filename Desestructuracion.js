//Problema 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//Tesla
console.log(otherRandomCar)//tiene una coma indicando el segundo elemento entonces es Mercedes

//Problema 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);//no esta
console.log(otherName);//Elon


//Problema 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; //error por definir constante 
//Predict the output
console.log(password);//
console.log(hashedPassword);//no existe password en Person

//Problema 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//2 es diferente de 5 faalse
console.log(first == third);// 2 es igual a 2 true

//Problema 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);// value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//el segundo elemendo de secondKey