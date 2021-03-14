//getting the map's height
var h = 0;
var map = document.getElementById("worldMap");
h  = map.clientHeight;

//set position for ru flag
var ruTop = "";
var ruFlag = document.getElementById("ru");
ruTop = -0.76*h;
ruFlag.style.top = ruTop + "px";

//set vertical position for us flag
var usTop = "";
var usFlag = document.getElementById("us");
usTop = -0.61*h;
usFlag.style.top = usTop + "px";

//set vertical position for uk flag
var ukTop = "";
var ukFlag = document.getElementById("uk");
ukTop = -0.66*h;
ukFlag.style.top = ukTop + "px";

//set vertical position for br flag
var brTop = "";
var brFlag = document.getElementById("br");
brTop = -0.33*h;
brFlag.style.top = brTop + "px";

//set vertical position for il flag
var ilTop = "";
var ilFlag = document.getElementById("il");
ilTop = -0.54*h;
ilFlag.style.top = ilTop + "px";
