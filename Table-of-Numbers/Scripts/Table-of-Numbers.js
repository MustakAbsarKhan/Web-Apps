function myFunction(){
  
 var x = document.getElementById("int").value;
 let text = "";
if(isNaN(x)==false){
  for (let i = 1; i < 11; i++) {
    if (i === 11) { break; }
    text += x+" X "+i+ "= "+((i*x)).toFixed(2)+ "<br>";
}
}else{
  window.alert("Please input a number. "+x+" is not a number")
}
document.getElementById("demo1").innerHTML = text;
}