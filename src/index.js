import "./style.css";

const searchbutton = document.getElementById("submit");
searchbutton.addEventListener("click", () => {
	let location = document.getElementById("location");
	let test = location.value;

	console.log(test);
	getWeather(test);
});
function getAPI() {}

//this will be the function to get the location from somwewhere
function getData() {
	//key is ZVFB4SWSDYVUP2SNNA5AYMS7W
}
//ZVFB4SWSDYVUP2SNNA5AYMS7W
async function getWeather(location) {
	const thing = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location},US?key=ZVFB4SWSDYVUP2SNNA5AYMS7W`,
		{ mode: "cors" }
	);
	const thingy = await thing.json();
	let address = thingy.address;
	let days = thingy.days;
	console.log(thingy);
	console.log(address);
	console.log(days[1].description);
	alert(
		"today's weather is " +
			days[1].description +
			" with a high of " +
			days[1].tempmax
	);
}

//address tells us the location
//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[auburn]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

// Dates should be in the format yyyy-MM-dd. For example 2020-10-19
//Only one date is needed, but you can search through the second date

//Example of getting weather for london for the next 15 days
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=ZVFB4SWSDYVUP2SNNA5AYMS7W'
