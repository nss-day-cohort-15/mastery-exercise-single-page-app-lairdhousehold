var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function (callback) {

      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(xhr.responsetext)
        cb(inventory)
      })
      inventoryLoader.send();
    }
  }

}());

console.log('i ran 2')
