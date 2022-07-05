function myFunction(){
  let x = document.getElementById("int").value;
  let y = document.getElementById("int1").value;
  //variables for x
  let text = "";
  const root = Math.sqrt(x);
  let isPrime = true;
  let processx = false;
  let divisorx = [];
  //variables for y
  let text1 = "";
  const root1 = Math.sqrt(y);
  let isPrime1 = true;
  let processy = false;
  let divisory = [];
  //for result
  let result = "";
//finding prime in input x and y
//for x
  if(isNaN(x)==false){
        for(let i = 2; i<=root; i++){
          if(x % i === 0 && x>2){
            for(let i=2; i<x; i++){
              if(x % i === 0){
                divisorx.push(i)//pushing divisors into array when it is not prime
              }
            }
            text += divisorx + " are divisors of x";
            processx = true;
            isPrime = false;
            break;
          }
        }
        if(isPrime == true){
          text += x + " is the divisor[Prime]";
          divisorx.push(x)//pushing divisor into array when it is prime
          processx = true;
          }
    }else{
      window.alert("Please input a number. "+x+" is not a number")
    }
    document.getElementById("demo").innerHTML = text;

//for y
  if(isNaN(y)==false){
    for(let j = 2; j<=root1; j++){
      if(y % j === 0 && y>2){
        for(let j=2; j<y; j++){
          if(y % j === 0){
            divisory.push(j)//pushing divisors into array when it is not prime
          }
        }
        text1 += divisory + " is/are divisors of y";
        isPrime1 = false;
        processy = true;
        break;
        }
      }
      if(isPrime1 == true){
        text1 += y + " is the divisor[Prime]";
        divisory.push(y)//pushing divisor into array when it is prime
        processy = true;
        }
  }else{
    window.alert("Please input a number. "+y+" is not a number")
  }
    document.getElementById("demo1").innerHTML = text1;

    if(processx==true & processy==true){
      const filtArray = divisorx.filter(value => divisory.includes(value));
      if(Math.max(filtArray)===0){
        result += "1 is the Greatest Common Divisor (GCD)"
      }else{
      result += Math.max(filtArray) + " is the Greatest Common Divisor (GCD)"
      }
    }
    document.getElementById('result').innerHTML = result;
  }