let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString());

// console.log(typeof(myDate))

let myTimeStamp = Date.now();
console.log(myTimeStamp);   // give time in millisecond
console.log(Math.floor(Date.now()/1000)) // to convert the milliseconds into sec