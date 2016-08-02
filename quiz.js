function populatePage (inventory) {console.log("hi")
  // Loop over the inventory and populate the page

  var carList = document.querySelector(".container")
  var output ="";
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
