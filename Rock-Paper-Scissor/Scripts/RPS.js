
function computerPlay(){
  var rps = ["Rock","Paper","Scissor"]
  var rps = rps[Math.floor(Math.random() * rps.length)]
  return rps;
}

function playRound(playerSelection,computerSelection){
  var computerSelectionlow = computerSelection.toLowerCase();
  var playerSelectionlow = playerSelection.toLowerCase();
  var computerSelectionup = computerSelection.toUpperCase();
  var playerSelectionup = playerSelection.toUpperCase();

  if(computerSelectionlow=='rock' && playerSelectionlow=='scissor'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Lose! "+computerSelectionup+" beats "+ playerSelectionup);
  }else if(computerSelectionlow=='scissor' && playerSelectionlow=='paper'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Lose! "+computerSelectionup+" beats "+ playerSelectionup);
  }else if(computerSelectionlow=='paper' && playerSelectionlow=='rock'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Lose! "+computerSelectionup+" beats "+ playerSelectionup);
  }else if(computerSelectionlow=='rock' && playerSelectionlow=='paper'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Won! "+playerSelectionup+" beats "+ computerSelectionup);
  }else if(computerSelectionlow=='scissor' && playerSelectionlow=='rock'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Won! "+playerSelectionup+" beats "+ computerSelectionup);
  }else if(computerSelectionlow=='paper' && playerSelectionlow=='scissor'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nYou Won! "+playerSelectionup+" beats "+ computerSelectionup);
  }else if(computerSelectionlow=='rock' && playerSelectionlow=='rock'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nIt is a Tie");
  }else if(computerSelectionlow=='paper' && playerSelectionlow=='paper'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nIt is a Tie");
  }else if(computerSelectionlow=='scissor' && playerSelectionlow=='scissor'){
    console.log("Computer:"+computerSelectionup+"\nPlayer:"+playerSelectionup+"\nIt is a Tie");
  }else{
    console.log("Please Type Rock or Paper or Scissor");
  }
}
function game(){
  for (let i = 0; i<5; i++){
    let userInput = prompt("Please Write Rock, Paper or Scissor");
    playRound(userInput,computerPlay())
  }
}
game();
