var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = $.parseJSON(inventory)
        console.log("Hi")


      });
    }
  };

})();

