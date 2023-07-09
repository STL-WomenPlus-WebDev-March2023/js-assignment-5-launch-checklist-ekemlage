// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   //new below
   if(testInput===""){
    return "Empty";
   }else if (isNaN(Number(testInput))=== true){
    return "Not a Number";
   }else if (isNaN(Number(testInput))=== false){
    return "Is a Number";
   }
   //new above
}

//function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {   
function formSubmission(pilot, copilot, fuelLevel, cargoLevel) { 
   if(validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty"){
    alert("All fields are required!");
   }else if(validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number"){
    alert("Pilot and Copilot should not be numbers. Fuel Level and Cargo Mass should be numbers. Please try again.");
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
