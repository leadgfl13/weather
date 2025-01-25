import "./style.css";

//add states to dropdown

const states = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];

//adds the states to the dropdown menu
const drop = document.getElementById("stateDropdown");

for (const state of states) {
	let option = document.createElement("option");
	option.value = state;
	option.text = state;
	drop.appendChild(option);
}

const searchbutton = document.getElementById("submit");
searchbutton.addEventListener("click", (e) => {
	e.preventDefault();
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
