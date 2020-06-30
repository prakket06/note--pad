var a = 1;
/*var password = prompt('Password');
var pwd = "tekkihcarp";*/

var i = 10;

var b = 50;

function setup(){
  createCanvas(displayWidth ,displayHeight);
}

function draw(){
  if(password == pwd){
    a = 1;
  }
  else{
    a = 2;
  }

  
  
  /*if (a == 2){
    text("Your password is wrong",displayWidth/2-50,displayHeight/2-20);
    text("Hint-8,33,55,55,444,44,222,2,777,7",displayWidth/2-50,displayHeight/2);
    password = prompt('Password');
  }*/
  /*else{
    a == 0;
  }*/
  if(a == 1){
    
    switch(keyCode){
      case 65:
        text("a",i,b);
        i = i + 20;
        break;
      case 66:
        text("b",i,b);
        i = i + 20;
        break;
      case 67:
        text("c",i,b);
        i = i + 20;
        break;
      case 68:
        text("d",i,b);
        i = i + 20;
        break;
  
  
    }    
  }
  
  

}

