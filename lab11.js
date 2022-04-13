// Lab - 11

//working with API

window.onload = function() {

var out_location = document.
getElementById("location");

var out_temp = document.
getElementById("temperature");

var out_conditions = document.
getElementById("conditions");

var out_icon = document.
getElementById("icon");

//creating a variable for my API key

//const myAPIkey = "";

//creating a variable for the desire URL

const url = "api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=4ded1d51bb1373c9e145c52bc3f1c749&units=metric";

//use our XMLHttpRequest object to retrieve API data

let xhr = new XMLHttpRequest();   //CREATE A NEW REQUEST OBJECT

//NOW, WE CREATE A LISTENER & A FUNCTION FOR WHEN THE OBJECT'S readyState CHANGES.
xhr.onreadystatechange = function()
{
		if (xhr.readyState === 4 )                             //readyState OF 4 MEANS SERVER RESPONSE IS COMPLETE
		{  
			if (xhr.status === 200)                            //status OF 200 MEANS "OK"
			{  
			    //get data from our API & assign it to a variable
			    const data = xhr.response;
				console.log(data);
				//output API data to html through DOM
				out_location.innerHTML = data.name; //name is the proper in data
				out_location.innerHTML = data.weather[0].description;
			} else {  //handle the error
			          out_location.innerHTML = "Api call was unsuccessful";
					  console.log(xhr.status);
			}
		}//end if readyState										
}//end readyState listenerfunction
		//provide url and specify response type
		xhr.open('GET',url,true);
		xhr.responseType = "json";
		xhr.send(null);
		
}
