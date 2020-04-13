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
  var partnername = prompt("Enter your partner's name ")

  var love_percentage = Math.floor((Math.random() * 100) + 1);
  if (username==null || partnername==null) {
    ;

  } else {
    var para = document.getElementById("result");
    para.innerHTML +=username+' and '+partnername+' Love Percentage is '+love_percentage;
  }

}, 2000);
