// {let a=10}
// let b=20
// sum=a+b
// console.log(sum);

// let a=10;
// console.log(a);
// a=20
// console.log(a);

// console.log(a);
// var a=20;
// bcz of hoisting, JS moves declaration of a to the top but not the assignment
// so at the time of console.log, a is declared but not assigned any value, hence undefined
// if we use var instead of let or const, it will not throw an error but will print undefined bcz of hoisting(only declaration is hoisted, not the assignment)


let a=10
let str="hello"
let isok=true
let arr1=[1,2,3]
let obj={name:"nitesh"}
let empty=null // why type is not null but it is object type bcz of legacy reasons in JS
let b;
// console.log(typeof b);

// console.log(5=='5');// true
// console.log(5==='5');// false

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
// arr.forEach(element => {
//     if(element%2==0)
//          console.log(element);
// });

/*
const obj1={name:"nitesh"};
console.log(obj1.name);
obj1.name="hero"; // we can change the properties of obj1 but we cannot reassign obj1 to a new object
console.log(obj1.name);
*/

/*
const factorial=function(n){
    if(n==1 || n==0)
        return 1;
    else return n*factorial(n-1);
}
console.log(factorial(4));


const fibonacci=function(n){
    if(n<2)
        return n;
    else return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(5));

function fibonacci1(number){
    if(number<2)
        return n;
    else return fibonacci(number-1)+fibonacci(number-2);
}
fibonacci1(5);
console.log(fibonacci1);
*/

const sales ="Toyota";
function Types(name){
    return name==="Honda"?name:"SORRY";
}

const car={mycar:"saturn",getCar:Types("Honda"),special:sales}
console.log(car.mycar);
console.log(car.getCar);
console.log(car.special);

const students={name:"nitesh",age:20,course:"Btech"};
for(const key in students){
    console.log(key,students[key]);
    
}
 let arr2=[1,2,3,4,5,6,7,8,9];
 for(const key in arr2){
    console.log(key,arr2[key]);
    
 } // for in loop used when we work on index also

 const fruits=["Apple","Banana","Litchi"]
 for(const fruit of fruits){
    console.log(fruit);
    
 }  // for of used when we only need to traverse values not index


 for(const char of "Script"){
    console.log(char); // prints each character of the string
    
 }


 const str1="JAvaScript";
 let cnt=0;
for(const v of str1){
    if("aeiou".includes(v.toLowerCase()))
        cnt++;
}
console.log(cnt);

const colors=["Red","Green","Blue"];
for(const [index,color] of colors.entries()){ // entries() method returns an array iterator object with key(index)/value pairs
    console.log(index,color);;
    
}















