// Q1. Simple Counter 
// Ek function createCounter() implement karo.
// Requirements:
// Har call par number increment ho
// Direct variable access possible na ho

// let x=0;
// function createCounter(){
//     return function count(){
//         x++;
//         console.log(x);
//     }
// }
// const counter=createCounter();
// counter()
// counter()
// counter()





// Q2. Counter with Multiple Methods
// Ek function createCounter(start) banao.
// Return kare object jisme:
// increment()
// decrement()
// value()

// function createCounter(x){
//     let counter={
//         increment:function(){
//             x++;
//             console.log(x);
//         },
//         decrement:function(){
//             x--;
//             console.log(x);
//         },
//         value:function(){
//             console.log(x);
//         }
//     }
//     return counter;
// }
// const counter = createCounter(10);
// counter.increment(); 
// counter.increment(); 
// counter.decrement(); 
// counter.value();     




// Q3. Private Bank Account
// Ek function createAccount(initialBalance) banao.
// Methods:
// deposit(amount)
// withdraw(amount)
// getBalance()
// Conditions:
// Balance negative nahi hona chahiye
// Balance directly accessible nahi hona chahiye

// function createAccount(bank){
//     let x=bank;
//     return obj={
//         deposit:function(amt){
//             x+=amt;
//             console.log("Deposit done of rupees ",amt);
//         },
//         withdraw:function(amt){
//             if(x<amt)
//             {
//                 console.log("Not enough cash.....");
//                 return;
//             }
//             x=x-amt;
//             console.log("Withdrawal done of rupees ",amt);
//         },
//         getBalance:function(){
//             console.log("Bank balance:",x);
//         }
//     }
// }
// let account=createAccount(10000);
// account.getBalance();
// account.deposit(1000);
// account.getBalance();
// account.withdraw(5000);
// account.getBalance();



// Q4. Independent Closure Test
// Predict the output

// function outer() {
//     let x = 5;
//     return function() {
//         x += 2;
//         return x;
//     }
// }
// const a = outer();
// const b = outer();
// console.log(a());
// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());




// Q5. Function Factory
// Ek function multiplier(factor) banao.

// function multiplier(factor){
//     return function(number){
//         return number*factor;
//     }
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5)); 
// console.log(triple(5)); 