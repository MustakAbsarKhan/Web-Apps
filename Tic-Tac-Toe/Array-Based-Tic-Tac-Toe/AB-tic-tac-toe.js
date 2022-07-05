let tictactoe=[[0,0,0],
               [0,0,0],
               [0,0,0]]

//getting input from the player based on row and column number
function playerInput(){
    for(let x=0; x<3; x++){
        let rowinput = prompt("Player 1:Input the row number 0,1 or 2");
        let columninput = prompt("Player 1:Input the column number 0,1 or 2");
        tictactoe[rowinput][columninput] = "1";
        let rowinput1 = prompt("Player 2:Input the row number 0,1 or 2");
        let columninput1 = prompt("Player 2:Input the column number 0,1 or 2");
        tictactoe[rowinput1][columninput1] = "2";
        }
        console.log(tictactoe)
}
function resultCheck(){
    playerInput();
if(tictactoe[0][0]==1 && tictactoe[0][1]==1 && tictactoe[0][2]==1 && tictactoe[1][0]==2 && tictactoe[1][1]==2 && tictactoe[1][2]==2){
        console.log("Draw! Play Again")
    }else if(tictactoe[0][0]==1 && tictactoe[0][1]==1 && tictactoe[0][2]==1 && tictactoe[2][0]==2 && tictactoe[2][1]==2 && tictactoe[2][2]==2){
        console.log("Draw! Play Again")
    }else if(tictactoe[0][0]==1 && tictactoe[0][1]==1 && tictactoe[0][2]==1){
        console.log("Player 1 Wins")
    }else if(tictactoe[1][0]==1 && tictactoe[1][1]==1 && tictactoe[1][2]==1){
        console.log("Player 1 Wins") 
    }else if(tictactoe[2][0]==1 && tictactoe[2][1]==1 && tictactoe[2][2]==1){
        console.log("Player 1 Wins") 
    }else if(tictactoe[0][0]==1 && tictactoe[1][1]==1 && tictactoe[2][2]==1){
        console.log("Player 1 Wins") 
    }else if(tictactoe[0][2]==1 && tictactoe[1][1]==1 && tictactoe[2][0]==1){
        console.log("Player 1 Wins") 
    }else if(tictactoe[0][0]==2 && tictactoe[0][1]==2 && tictactoe[0][2]==2){
        console.log("Player 2 Wins")
    }else if(tictactoe[1][0]==2 && tictactoe[1][1]==2 && tictactoe[1][2]==2){
        console.log("Player 2 Wins") 
    }else if(tictactoe[2][0]==2 && tictactoe[2][1]==2 && tictactoe[2][2]==2){
        console.log("Player 2 Wins") 
    }else if(tictactoe[0][0]==2 && tictactoe[1][1]==2 && tictactoe[2][2]==2){
        console.log("Player 2 Wins") 
    }else if(tictactoe[0][2]==2 && tictactoe[1][1]==2 && tictactoe[2][0]==2){
        console.log("Player 2 Wins") 
    }else{
        console.log("Draw!! Play Again")
    }
}
resultCheck();