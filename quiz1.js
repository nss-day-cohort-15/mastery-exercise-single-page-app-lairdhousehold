// var container = document.getElementByID("carContainer");
// var textInput = document.getElementByID("text-input");
// var submit = document.getElementByID("submit");
// // states the name of the function
function populatePage (inventory) {
  // state the needed variables
  var carList = document.getElementByID(".cards")
  var output ="";
  console.log("got this far")
  // Loop over the inventory and populate the page
  Inventory.Foreach(function(currentCar, idx){
    if (idx % 3 === 0){
      output += '<div class="row">';
    }
    output += '<div class"col-md-4 car">';
    output += '<h4> ${currentCar.year} ${currentCar.make} ${currentCar.model}</h4>';



    if (currentCar.purchased === false){
      output += '<h4>For Sale!</h4>';
    } else {
      output += '<p>Sorry, Out of Stock</p>';
    };

    output += '<p>${currentCar.description}</p>';
    output += '<div>';
});
container.innerHtml += output;

var cars = document.getElemntByID("cars")

for (var i=0; i <cars.length; i++) {
  var car = cars[i];
  car.style.borderColor = inventory[i].color;
 }

  CarLot.activateEvents();
}
  CarLot.loadInventory(populatePage);
  // };
  // console.log('I ran');
// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
