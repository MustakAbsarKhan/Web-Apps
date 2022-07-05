function getRandom(){
  var num=Math.random();
  var text = "";
  if(num < 0.5){
    text+= "Head"
  }else if(num < 0.8){
    text+= "Tails"
  }else{
    text+= "Tie"
  };
  document.getElementById('es6').innerHTML = text;
}