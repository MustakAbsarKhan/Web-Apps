function myFunction(){
//For x
 var x = document.getElementById("int").value;
 let textx = "";
 let multiplex = [];
 //For y
 var y = document.getElementById("int1").value;
 let texty = "";
 let multipley = [];
 //result
 let result = "";
 //FINDING THE MUTIPLES OF X
  if(isNaN(x)==false){
  for (let i = 1; i < 11; i++) {
    if (i === 11) { break; }
    multiplex.push(((i*x)).toFixed(2));
    }
    textx += multiplex + " are the multiples of "+x;
}else{
  window.alert("Please input a number. "+x+" is not a number")
}
document.getElementById("demo").innerHTML = textx;
//FINDING THE MULTIPLES OF Y
if(isNaN(y)==false){
  for (let i = 1; i < 11; i++) {
    if (i === 11) { break; }
    multipley.push(((i*y)).toFixed(2));
    }
    texty += multipley + " are the multiples of "+y;
}else{
  window.alert("Please input a number. "+y+" is not a number")
}
document.getElementById("demo1").innerHTML = texty;
//Finding intersection and LCD
  const filtArray = multiplex.filter(value => multipley.includes(value));
  let resultfinal = Math.min(parseFloat(filtArray))
  if(isNaN(resultfinal)==false){
  result += resultfinal + " is the Least Common Multiple (LCM)"
  }else{
    result += "There isn't any common divisor"
  }
  document.getElementById('result').innerHTML = result;
}