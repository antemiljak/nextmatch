function getData(day, month){	//makes the API call and stores the data locally

	xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.responseType = 'json';

	xhr.open("GET", "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?federation=UEFA&iso_date=2021-"+day+"-"+month + "&market=classic");
	xhr.setRequestHeader("x-rapidapi-host", "football-prediction-api.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "bc90667614msha72a825a2b31b88p131ffbjsnf441aefb0128");
console.log(day + " " + month);

	xhr.send(data);

	
	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			console.log('response', this.response); // JSON response 

        	console.log(this.response.data[i].home_team); 
			console.log("Data loaded");

			document.getElementById("matchup").innerHTML = xhr.response.data[i].home_team +"   VS   "+ xhr.response.data[i].away_team + "   Prediction:"+xhr.response.data[i].prediction;
		}
	});

/*
	setTimeout(function(){
			displayAll();

	}, 2000); 
*/

	
}


function next(){
/*
	document.getElementById("matchup").innerHTML = "Real Madrid" + "<br/>" + "VS" + "<br/>" + "PSG";
document.getElementById("prediction").innerHTML = "Prediction: X";
document.getElementById("date").innerHTML = "12.12.2021 21:00";
*/
	if(i >= xhr.response.data.length ){
		document.getElementById("main_box").innerHTML = "No more matches";
	}
	else{
			document.getElementById("matchup").innerHTML = xhr.response.data[i].home_team +"   VS   "+ xhr.response.data[i].away_team + "   Prediction:"+xhr.response.data[i].prediction;
			document.getElementById("matchup").innerHTML = xhr.response.data[i].home_team +"   VS   "+ xhr.response.data[i].away_team + "   Prediction:"+xhr.response.data[i].prediction;

		i++;
	}

}

function displayAll()
{
	for( i = 0; i < 6; i++)
	{
		var newDiv = document.createElement("div");
		var newName = "matchBox" + i.toString();
		var className = "matchboxes"
		newDiv.id = newName;
		newDiv.class = className;
		const newContent = document.createTextNode(xhr.response.data[i].home_team + " <br/>" +" VS " + "<br/>" + xhr.response.data[i].away_team + "   Prediction:"+xhr.response.data[i].prediction);
		newDiv.appendChild(newContent);
		document.getElementById("prediction").append(newDiv);	//ovo prominit na stvarni element
	}
}

function login(){	//povezat na botun
	username = document.getElementById("input_username").value;

	window.location.href = 'homepage.html';
	console.log(username);
	document.getElementById("username").innerHTML = username;
}
