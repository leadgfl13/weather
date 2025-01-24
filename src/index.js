import "./style.css";

document.addEventListener("click", () => {
	alert("hello");
});

function getAPI() {}

//this will be the function to get the location from somwewhere
function getData() {
	//key is ZVFB4SWSDYVUP2SNNA5AYMS7W
}

//ZVFB4SWSDYVUP2SNNA5AYMS7W
async function getWeather() {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=VFB4SWSDYVUP2SNNA5AYMS7W`
	);
	response.json().then(function (response) {
		test = response.data;
	});
	const Cat = await response.json();
	console.log(Cat);
}
//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[auburn]/[date1]/[date2]?key=ZVFB4SWSDYVUP2SNNA5AYMS7W "

getWeather();
// Dates should be in the format yyyy-MM-dd. For example 2020-10-19
//Only one date is needed, but you can search through the second date

//Example of getting weather for london for the next 15 days
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=ZVFB4SWSDYVUP2SNNA5AYMS7W'
