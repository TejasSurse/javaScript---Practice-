// In this chapter we will learn about js Number Type and its useful methods for working with numbers effectively.
// Introduction to javascript number type javascript also provides the number reference type for numeric values.

let numbereObj = new Number(5);
console.log(numbereObj); // prints Number Object 
console.log(numbereObj.valueOf());// returns actual value in numebr format 
let a = numbereObj.valueOf();
console.log(typeof(a));
console.log(numbereObj.toString()); // prints actual number but in string format 

console.log(typeof(numbereObj.toString()));
console.log(numbereObj.toString(2));//  return binary forat of the number 

console.log(numbereObj.toString(16));

// formatting numbers 

// to format numbers with a specified number of decimal points you use the toFixed() method.

// the toFixed() method accepts an argument that indicates how many deccimal points should be used 

let b = 121.289312;
console.log(b.toFixed(2));
