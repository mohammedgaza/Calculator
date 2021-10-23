// clear values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   
   //evaluates expression and return result
   function operate(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
   }

   //!#$$$$$
function usd(){
    var usd1 = document.getElementById("result").value;
     clearScreen();
     return value = parseFloat(usd1) / 3.23032;
}

function ils(){
    var ils1 = document.getElementById("result").value;
     clearScreen();
     return value = parseFloat(ils1) * 3.23032;
}

function eur(){
    var eur1 = document.getElementById("result").value;
     clearScreen();
     return value = parseFloat(eur1) / 3.7032;
}

function ils1(){
    var ils11 = document.getElementById("result").value;
     clearScreen();
     return value = parseFloat(ils11) * 3.7032;
}

