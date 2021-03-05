//set position for flags
var h = 0;
var ruTop = "";
var worldMap = document.getElementById("worldMap");
h  = worldMap.clientHeight;
var flag = document.getElementById("ru");
ruTop = 0.26*h;
flag.style = "top: " + ruTop + "px";
flag.onmouseover = function(){
    flag.border = "4px";
}
