// //variable
// /*
// Type Annotations on Variables
// When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type
// of the variable:
// Types: string, number, bollean, undefined, null
//  */
// let myName: string = "Alice";

// /* Declaration of a variable: is for informing the compiler of the following information:
//  name of the variable, type of value it holds, and the initial value if any it takes. 

//  *** important note:
//  variable decalred with let and const can never be redeclared. Varaible declared with var can be redeclared*/
 
//  //*** important note: Types of variable can never be changed no matter with which keyword (var, let, const) it is declared with.

//  let var1:number;
// //  let var1;   //error
// //let var1:string;  //error

// var var2:string;
// var var2:string;

// const var3:number=5;
// //const var3:number=5; //error



// //template literals
// console.log("Hello, this is awais imran");
// let name_:string = "Awais"
// let name_print = `My name is ${name_}. using backticks`
// console.log(name_print)

// //string concatenation
// let name_2:string= "imran"
// let name_print2 = "My last name is " + name_2 +". using concatenation";
// console.log(name_print2)

// let x = "2";
// let y = +"2"+2+2;

// console.log(y, typeof y)


// class Greeter {
//     greeting: string;
   
//     constructor(message: string) {
//       this.greeting = message;
//     }
   
//     public greet() {
//       return "Hello, " + this.greeting;
//     }
//   }
   
//   let greeter = new Greeter("world");
//   console.log(greeter.greet())

const sleep = (ms:number)=> new Promise(r => setTimeout(r, ms));
console.log("Hello");
await sleep(3000);
console.log("hi");
