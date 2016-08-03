// sets up the variables
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function (callback) {
      return inventory;
    },

    loadInventory: function (cb) {

      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responsetext).cars
        callback(inventory)
      })
      inventoryLoader.send();
    } else {
      callback(inventory);
    }
createInventory.getCarInventory =function(){
  return Inventory;
  }
  return createInventory;
}

})(CarLot || {});
console.log("loaded")
