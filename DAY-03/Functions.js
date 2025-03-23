//Functions
function PrintMsg()
{
    console.log("Hello World!")
}

PrintMsg()

//return type function
function sum(){
    return 5+6
}
console.log(sum())

//parametarized functions
function sub(a,b)
{
    return (a-b);
}
console.log(sub(5,3));

//Write a boolean function to find a given number is prime
function isPrime(a)
{
    if(a % 2 == 1 || a % a == 0)
    {
        return true
    }
    else 
    {
        return false
    }
}
console.log(isPrime(6));

//write a recursive function to print from 1 to n
function printNumber(n)
{
    if(n = 1)
    {
        return 1 
    }
    else {
      
    return printNumber(n)
       
    }
    
}
console.log(printNumber(5))

//arrow function - short form 
const msg = ()=>{console.log("Hello JS")}
console.log(msg)
msg()


//arrow function to do arithmatic operation
const arithmaticOperations = (a,b)=>{
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

arithmaticOperations(10,5);

//return type
let add = (a,b)=>{
    return a+b
}
console.log(add(5,6))

//default parameter
const mult = (a,b=2)=> {return a*b}
console.log(mult(4,5))
console.log(mult(4))

//rest parameter
const mySum = (...n)=> {
    let sum = 0
    n.forEach((i)=> sum =sum + i)
    console.log(sum)
}
mySum(4,5,6,8,9,2)

//callback functions
const greet = (msg, fun)=> {
    console.log("Hi.." + msg)
    fun()
}
greet("Good Morning!", ()=>{console.log("My name is David")})

const multtwo = (n)=>n*2 

const myArr = (mul,...n)=>{
    n.forEach((i)=> console.log(mul(i)))
}
myArr(multtwo, 4,5,6,8,2)

