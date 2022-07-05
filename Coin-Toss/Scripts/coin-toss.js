function getRandom(){
  var num=Math.random();
  var text = "";
  if(num < 0.7){
    text+= "Head"
  }else if(num < 0.2){
    text+= "Tails"
  }else{
    text+= "Tie"
  };
  document.getElementById('es6').innerHTML = text;
}