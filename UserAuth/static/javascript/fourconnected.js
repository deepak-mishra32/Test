// var p1=document.getElementById('ply1').value;
// var p2=document.getElementById('ply2').value;
// var toss=document.getElementById('toss').value;
var p1=prompt("First Player's Name")
$('#p1').text(p1).css("color","red");
var p2=prompt("Second Player's Name")
$('#p2').text(p2).css("color","Blue");
var toss=prompt("Toss:(with respect to First player) Head or Tail?")
var go=0;
var nextplyr;
const square=[];
for (var i = 0; i < $("button").length; i++) {
  square.push($('button').eq(i));
}
var coin=["Head","Tail"];
var win=coin[Math.floor(Math.random()*coin.length)];
alert("It's "+win);
if (toss==win){
  $("#Toss").text(p1+" Won");
  $('#Turn').text(p1);
  nextplyr=p1;
  console.log(p1+" has Won the Toss");
  Game();
}
else{
  $("#Toss").text(p2+" Won");
  $('#Turn').text(p2);
  nextplyr=p2;
  console.log(p2+" has Won the Toss");
  Game();
}

function Game(){
  square.forEach((square, i) => {
    $("button").eq(i).on('click',function(){
    $("#pname").text("Game in Progress");
      if(nextplyr==p1){
        nextplyr=p2;
          checkEmpty(i);
        }
      else if(nextplyr==p2){
        nextplyr=p1;
          checkEmpty(i);
          }
        checkver();
        checkhor();
        }
      )
      // if (go==1){
      //     $('pname').text("Game Over");
      //     console.log("gameover");
      //   }
      // else if(go==0){
      //   console.log("not over");
      //   // return true;
      // }
    }
  );
}

function checkver(){
  square.forEach((square, i) => {
    if (((i==38) || (i==31) || (i==24) || (i==17) || (i==10))){
      if ($("button").eq(i).text()=='R'){
        if (($("button").eq(i+1).text()=='R') && ($("button").eq(i+2).text()=='R') && ($("button").eq(i+3).text()=='R') || ($("button").eq(i).text()=='R') && ($("button").eq(i-1).text()=='R') && ($("button").eq(i-2).text()=='R') && ($("button").eq(i-3).text()=='R') || ($("button").eq(i-1).text()=='R') && ($("button").eq(i+1).text()=='R') && ($("button").eq(i+2).text()=='R') || ($("button").eq(i-2).text()=='R') && ($("button").eq(i-1).text()=='R') && ($("button").eq(i+1).text()=='R')){
        rwin();
      }
    }
    else if ($("button").eq(i).text()=='B'){
      if (($("button").eq(i+1).text()=='B') && ($("button").eq(i+2).text()=='B') && ($("button").eq(i+3).text()=='B') || ($("button").eq(i).text()=='B') && ($("button").eq(i-1).text()=='B') && ($("button").eq(i-2).text()=='B') && ($("button").eq(i-3).text()=='B') || ($("button").eq(i-1).text()=='B') && ($("button").eq(i+1).text()=='B') && ($("button").eq(i+2).text()=='B') || ($("button").eq(i-2).text()=='B') && ($("button").eq(i-1).text()=='B') && ($("button").eq(i+1).text()=='B')){
        bwin();
          }
        }
      }
    }
  )
}

function checkhor(){
  square.forEach((square, i) => {
    if (($("button").eq(i).text()=='R') && ($("button").eq(i+7).text()=='R') && ($("button").eq(i+14).text()=='R') && ($("button").eq(i+21).text()=='R')){
        rwin();
      }
    else if (($("button").eq(i).text()=='B') && ($("button").eq(i+7).text()=='B') && ($("button").eq(i+14).text()=='B') && ($("button").eq(i+21).text()=='B')){
        bwin();
      }
    }
  )
}

function checkEmpty(i){
  if(($("button").eq(i+35).text()=='R') || ($("button").eq(i+35).text()=='B')) {
    if (($("button").eq(i+28).text()=='R') || ($("button").eq(i+28).text()=='B')) {
      if (($("button").eq(i+21).text()=='R') || ($("button").eq(i+21).text()=='B')) {
        if (($("button").eq(i+14).text()=='R') || ($("button").eq(i+14).text()=='B')) {
          if (($("button").eq(i+7).text()=='R') || ($("button").eq(i+7).text()=='B')) {
            if (($("button").eq(i).text()=='R') || ($("button").eq(i).text()=='B')) {
                $('#pname').text("It's a Draw");
                $('#res2').css("visibility","visible");
                $('#res3').text("It's a Draw").css("visibility","visible");
                alert("Game Over In Draw");
            }
            else{
              plot(nextplyr,i,0);
                      }
                  }
                  else{
                    plot(nextplyr,i,7);
                          }
                        }
                        else{
                          plot(nextplyr,i,14);
                                }
                              }
                              else{
                                plot(nextplyr,i,21);
                                        }
                                      }
                                      else {
                                        plot(nextplyr,i,28);
                                                }
                                              }
                                              else {
                                                plot(nextplyr,i,35);
                                              }
                                            }

function plot(nextplyr,i,j){
  if (nextplyr==p1){
    blueDot(i,j);
  }
  else if (nextplyr==p2){
    redDot(i,j)
  }
}

function redDot(i,j){
  $("button").eq(i+j).text("R")
  $('#Turn').text(p2+"'s Turn ");
  $("button").eq(i+j).css({"background-color":"red",
                "color":"red"});
}

function blueDot(i,j){
  $("button").eq(i+j).text("B")
  $('#Turn').text(p1+"'s Turn ");
  $("button").eq(i+j).css({"background-color":"blue",
                "color":"blue"});
}

function rwin(){
  $('#res2').css("visibility","visible");
  $('#res3').text(p1+" Won the Game").css("color","red");
  $('#pname').text("Game Over");
  $('#plyagn').css("visibility","visible");
}

function bwin(){
  $('#res2').css("visibility","visible");
  $('#res3').text(p2+" Won the Game").css("color","blue");
  $('#pname').text("Game Over");
  $('#plyagn').css("visibility","visible");
}
