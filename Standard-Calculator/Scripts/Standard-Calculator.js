let display = false;

function DeleteMe(){
    document.getElementById('MyResult').value = "";
}
function allClear(){
    document.getElementById('MyResult').value = "";
    document.getElementById('tempResult').value = "";
}
function Answer(){
    let userInput = document.getElementById('MyResult').value;
    let result = Function("return " + userInput)();
    document.getElementById('MyResult').value = result.toFixed(2);
    display = true;
}
function calculator(x){
    if(display == false){
        document.getElementById('MyResult').value += x;
}else{
        tempdisplay = document.getElementById('MyResult').value;
        document.getElementById('tempResult').value = tempdisplay;
        DeleteMe();
        display = false;
        calculator(x);
}
}