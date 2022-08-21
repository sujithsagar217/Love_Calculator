/*function loveCalculator() {
  var username = prompt("Enter your name ");
  var partnername = prompt("Enter your partner's name ")
  var love_percentage = Math.floor((Math.random() * 100) + 1);
  var para = document.getElementById("result");
  para.innerHTML += love_percentage;
}
loveCalculator();*/

setTimeout(() => {
  var username = prompt("Enter your name ");
  var partnername = prompt("Enter your partner's name ");
  username=username[0].toUpperCase()+username.slice(1);
  partnername=partnername[0].toUpperCase()+partnername.slice(1);

  
  if (username==null || partnername==null) {
    ;

  } 
  else if ( (username.includes("Sujith") && partnername.includes("Var")) || (username.includes("Var") && partnername.includes("Sujith")) || (username.includes("Var") && partnername.includes("Chin")) || (username.includes("Chin") && partnername.includes("Var")) ){
    var para = document.getElementById("result");
    /*Believe*/
    var love_percentage = 101;
    para.innerHTML +=username+' and '+partnername+', your Love Percentage is '+love_percentage;
    para.style.margin=0;
    para.fontSize="21px";
  }
  else {
    var love_percentage = Math.floor((Math.random() * 100) + 1);
    var para = document.getElementById("result");
    para.innerHTML +=username+' and '+partnername+', your Love Percentage is '+love_percentage;
    para.style.margin=0;
    para.fontSize="21px";
  }

}, 2000);
