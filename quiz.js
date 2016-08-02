// states the name of the function
function populatePage (inventory) {
  // state the needed variables
  var carList = document.querySelector(".container")

  var output ="";
  // Loop over the inventory and populate the page
for (var i=0; i < inventory.cars.length; i++)
  var currentCar = inventory[i];
  CarList.innerHTML+= '<div>${currentCar.item}</div>'
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
console.log('I ran')
// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
