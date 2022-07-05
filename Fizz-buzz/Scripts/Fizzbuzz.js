let xinput = parseInt(prompt("Please Input a Number."))
const print1 = [];
for (let i=2; i<xinput; i++){
  if(i==xinput){break;}
  print1.push(i);
  if(i%3==0){
    console.log("Fizz");
  }else if(i%5==0){
    console.log("Buzz")
  }else if(i%3==0 && i%5==0){
    console.log("Fizz Buzz")
  }else{
    console.log(i);
  }
}
console.log(print1+" are the numbers between 1 and the " +xinput)