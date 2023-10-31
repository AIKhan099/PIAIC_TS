/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
printed on it. Call the function.
*/

function Tshirt(size:number, txt:string):string{
    console.log(`Given size is: ${size}. \n User text is: \n ${txt}`)
    return `Given size is: ${size}. \n User text is: \n ${txt}`
}
// Tshirt(35, "Give me good quality")
console.log(Tshirt(35, "Give me good quality"))
export { }