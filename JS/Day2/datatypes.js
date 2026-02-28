//datatypes
//1. primitive datatypes: 
//   number(include int and float),string,boolean,undefined,null,bigint,symbol

// number
let a=10
let b=2.36
console.log(a,b)
console.log(typeof a,typeof b)

// string
let c='Strike is coming'
let d="Tanushwi"
console.log(c,d)
console.log(typeof c);

//boolean
let login=true
let f=false
console.log(login,f)
console.log(typeof f)

// undefined --> when a variable is declared but not defined its value then bydefault undefined is assigned
let user;
// const a; --> error because const variable value must be defined at the time of declaration
console.log(user) // program sets undefined value
console.log(typeof user)

//big int
let num=1234567789876543n;
console.log(num)
console.log(typeof num)

//null --> when we want to assign any value to a variable
let weather=null // intentionally set to have no value
console.log(weather)
console.log(typeof weather) 
console.log("***")

// symbol --> used to create unique identifiers for objects
let id1=Symbol('id')
let id2=Symbol("id")
console.log(id1==id2) // false because both are unique
console.log(typeof id1)




//2. non-primitive datatypes
//   array,object,function

// array
let arr=[1,2,"Tanushwi",true]
console.log(arr)
console.log(typeof arr)

// object
let obj={
    name:"Tanushwi",
    account:12321,
    age:20,
    category:"general"
}
console.log(obj.name,obj.account,obj.age,obj.category)
console.log(typeof obj)

// function
let s=function add(){
    console.log("Hello")
}
s();
console.log(typeof s)


// primitive datatypes are immutable (cannot be changed)
let m=10
m=20
console.log(m)

let str="Hello"
str[0]="h"
console.log(str)



//non-primitive datatypes are mutable (can be changed)
let arr1=[1,2,3]
arr1[0]=10
arr1.push(40)
console.log(arr1)

let obj1={
    name:"Tanushwi",
    age:19
}
obj1.age=20
console.log(obj1)



let x=10
let y=x
y=20
console.log(x,y)



let obj2={
    name:"Tanushwi",
    age:20
}
let obj3=obj2
obj3.name="Priyanshi"
console.log(obj2,obj3)