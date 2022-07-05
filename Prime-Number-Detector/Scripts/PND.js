function myFunction(){
  let x = document.getElementById("int").value;
  let text = ""
  const root = Math.sqrt(x);
  let isPrime = false;
  if(isNaN(x)==false){
      if (x<= 1){
        text += x + " is not a Prime Number";
      }else if(x % 2 == 0 && x > 2){
        text += x + " is not a Prime Number";
      }else{
        for(let i = 3; i<=root; i += 2){
          if(x % i === 0){
            text += x + " is not a Prime Number";
            isPrime = true;
            break;
          }
        }if(isPrime == false){
          text += x + " is a Prime Number";
          }
        }
    }else{
      window.alert("Please input a number. "+x+" is not a number")
    }
    document.getElementById("demo1").innerHTML = text;
  }