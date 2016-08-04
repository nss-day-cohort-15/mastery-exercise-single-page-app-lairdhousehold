// sets up the variables
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function (callback) {
      return inventory;
    },

    loadInventory: function (callback) {

      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.addEventListener("load", function (event) {
        console.log(event.target)
        inventory = JSON.parse(event.target.responseText).cars
        callback(inventory)
      })
      inventoryLoader.send();
    }
  }

})(CarLot || {});
console.log("loaded")
