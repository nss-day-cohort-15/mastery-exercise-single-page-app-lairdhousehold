
function populatePage (inventory) {

  var carList = document.getElementById("car_cards")
  var output ="";
  console.log("got this far", inventory)
  // Loop over the inventory and populate the page
  inventory.forEach(function(currentCar, idx){
    if (idx % 3 === 0){
      output  += '<div class="row">';
    }
    output  += '<div class="col-sm-4 cards">';
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

  var cars = document.getElementsByClassName("cards")

  for (var i=0; i <cars.length; i++) {
  var car = cars[i];
  car.style.borderColor = inventory[i].color;
 }

  CarLot.activateEvents();
}
  console.log(CarLot)
  CarLot.loadInventory(populatePage);

