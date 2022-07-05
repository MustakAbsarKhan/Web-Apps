function myFunction(){
    var x = Number(document.getElementById("int1").value);
    var y = Number(document.getElementById("int2").value);
    document.getElementById("demo1").innerHTML = x + " = First Integar";
    document.getElementById("demo2").innerHTML = y + " = Second Integar";
    if(x > y) {
      window.alert(x + " is bigger")
    }else if (x==y) {
      window.alert(x +" & " + y + " Both are Equal")
    } else{
      window.alert(y + " is bigger")
    }

  }