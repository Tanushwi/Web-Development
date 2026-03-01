let a=10
let b=2.35
let isActive=true
let name="Tanushwi"
let user={
    name:"Tanushwi",
    age:20
}
console.log(a,b,isActive,name,user)




function add(x,y){
    return x+y;
}
console.log(add(2,3))




function outer(){
    let x=10;
    return function inner(){
        console.log(x);
    }
}
const y=outer()
y()