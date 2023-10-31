// //use const where variable values do not change
// const a = 5;
// const b : number = 33;
// const c ="best";
// //I suggest use let instead of var everywhere, 
// //becuase let has blocked scope
// if (true) {
// 	let z = 4;
// 	//use z
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope
// export { }
// let mytype =<any> {name:"zia",id:3};
// mytype={name:"zia",id:2};
// mytype={name:"zia",id:2,ll:""};
// mytype={name:"zia",ll:""}
// const enum Color1 {Red = 1, Green=2, Blue=4};
// var colorName = Color1[1];
// console.log(colorName);
let c = ((a, b) => ++a)(1, 2);
console.log(c);
export {};
