var i = 0;	//data iterator
var data;	//api data
var xhr;	//xmlHttp request
var username;
const d = new Date();
let month = d.getMonth();
let day = d.getDay() + 1;
document.getElementById("matchup").innerHTML = "Real Madrid" + "   VS   "+ "PSG";
document.getElementById("prediction").innerHTML = "Prediction: X";
document.getElementById("date").innerHTML = "12.12.2021 21:00";

/*getData(day, month);*/	//store API data locally
//displayAll();

