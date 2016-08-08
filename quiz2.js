var CarLot = (function(originalLot){
      var input = document.getElementById("input");
      var button = document.getElementById("button");
      var inputString;
      var selectedCard = '';
      var cars = document.getElementById("x")
    console.log(originalLot)

      originalLot.activateEvents = function(){
        for (var i = 0; i < cars.length; i++){
        cardx = cars[i];
        cardx.addEventListener("click", function(event){
          console.log('clicked')
          var CurrentCar = event.currentTarget;
          cardx.addEventListener("click", CarLot.addUnselectClass);
          cardx.addEventListener("click", function(event){
            CarLot.addSelected
          })
        }

            // console.log('peanuts'), false

console.log('peanuts')

  };
}
})
(CarLot || {});
// console.log("finished")

