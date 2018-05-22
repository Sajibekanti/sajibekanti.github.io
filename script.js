var ctx;
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
var functions = new Array();

functions.push("cdcel");
functions.push("stdcall");
functions.push("push");
functions.push("pop");
functions.push("mov");
functions.push("reverse");
functions.push("exploit");
functions.push("vulnerability");
functions.push("cybersecurity");
functions.push("security");
functions.push("defence");
functions.push("fuzzing");
functions.push("xss");
functions.push("stackoverflow");
functions.push("heap spray");
functions.push("injection");
functions.push("authentication");
functions.push("csrf");
functions.push("bug");
functions.push("race condition");
functions.push("deadlock");
functions.push("ioctl");
functions.push("memory leak");
functions.push("null pointer");
functions.push("infinity loop");
functions.push("0day");
functions.push("arm");
functions.push("pic");
functions.push("avr");
functions.push("atmel");
functions.push("atmega");
functions.push("iota");
functions.push("code coverage");
functions.push("code lense");
functions.push("leakage");
functions.push("x86");
functions.push("x64");
functions.push("cryptography");
functions.push("$ bitcoin");

var brushes = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#c0392b"];
var position = new Array();
var f = 1;

function RandomNumber(first, last){
  var choices = last - first;
  return Math.floor(Math.random() * choices + first);
}

function RandomPosition(l){
  for(i=0; i<=3600; i+=6){
    position[i] = RandomNumber(0, dimension[0]);
    position[i+1] = RandomNumber(0, dimension[1]);
    position[i+2] = RandomNumber(0, 15);
    position[i+3] = RandomNumber(0, 44+l);
    position[i+4] = RandomNumber(0, 8);
    position[i+5] = RandomNumber(0, 100)/100;
  }
}

function DrawClear(x , y) {
    ctx.clearRect(0, 0, x, y);
}

function DrawKernel(){
  DrawClear(dimension[0], dimension[1]);
  for(i=0; i<=900; i+=6){
    ctx.beginPath();
    var r = i%8;

    ctx.font = ctx.font.replace(/\d+px/, (position[i+2]+10) + "px");
    ctx.globalAlpha = position[i+5];
    ctx.strokeStyle = brushes[position[i+4]].toString();
    ctx.fillText(functions[position[i+3]], position[i], position[i+1]);
    ctx.closePath();
    ctx.stroke();

    position[i+5] -= RandomNumber(0, 100)/1000;
    if (position[i+5] < 0){
      position[i] = RandomNumber(0, dimension[0]);
      position[i+1] = RandomNumber(0, dimension[1]);
      position[i+2] = RandomNumber(0, 15);
      position[i+3] = RandomNumber(0, 64);
      position[i+4] = RandomNumber(0, 8);
      position[i+5] = RandomNumber(0, 100)/100;;
    }
  }
}

function StartBackground(){
  var canvas = document.getElementById('canvas');

  canvas.width = dimension[0];
  canvas.height = dimension[1];
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    RandomPosition(20);
    setInterval(DrawKernel, 100);
  }
}

function MonthOfYear(month){
  switch(month){
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "Octorber";
      break;
    case 10:
      return "November";
      break;
    default:
      return "December";
    }
}

function CopyRightTime(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  document.write(MonthOfYear(month) + " " + year.toString());

}

function ReCalculateCanvasSize(){
	dimension[0] = document.documentElement.clientWidth;
	dimension[1] =  document.documentElement.clientHeight;
	canvas.width = dimension[0];
  	canvas.height = dimension[1];
}

window.addEventListener("resize", ReCalculateCanvasSize);
