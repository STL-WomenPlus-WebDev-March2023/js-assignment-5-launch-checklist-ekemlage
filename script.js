// Write your JavaScript code here!

window.addEventListener("load", function() {

   
   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) { listedPlanets = result; }).then(function () { //idk why this looks messed up
       let chosenPlanet = pickPlanet(listedPlanets);
       console.log(chosenPlanet);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
   })


    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilot = document.querySelector("input[name=pilotName]").value;
      let copilot = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;
      formSubmission(pilot, copilot, fuelLevel, cargoLevel);  //should I have document here?
    });
   
});