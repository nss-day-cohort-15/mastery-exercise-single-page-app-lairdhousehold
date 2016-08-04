// var container = document.getElementById("carContainer");
// var textInput = document.getElementById("text-input");
// var submit = document.getElementById("submit");
// // states the name of the function
function populatePage (inventory) {
  // state the needed variables
  var carList = document.getElementById("car_cards")
  var output ="";
  console.log("got this far", inventory)
  // Loop over the inventory and populate the page
  inventory.forEach(function(currentCar, idx){
    if (idx % 3 === 0){
      output  += '<div class="row">';
    }
    output  += '<div class="col-md-4 car">';
    output  += `<h4> ${currentCar.year} ${currentCar.make} ${currentCar.model}</h4>`;



    if (currentCar.purchased === false){
      output  += '<h4>For Sale!</h4>';
    } else {
      output += '<p>Sorry, Out of Stock</p>';
    };

    output  += `<p>${currentCar.description}</p>`;
    output  += '</div>';
});
carList.innerHTML = output;

var cars = document.getElementsByClassName("cars")

for (var i=0; i <cars.length; i++) {
  var car = cars[i];
  car.style.borderColor = inventory[i].color;
 }

  CarLot.activateEvents();
}
  console.log(CarLot)
  CarLot.loadInventory(populatePage);
  // };
  // console.log('I ran');
// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
