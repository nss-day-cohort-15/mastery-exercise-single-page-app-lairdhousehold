var CarLot = (function(originalLot){
      var input = document.getElementById("input");
      var button = document.getElementById("button");
      var inputString;
      var selectedCard = '';
      var cars = document.getElementsByClassName("cards")
    console.log(cars)

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


            // console.log('peanuts'), false

console.log('peanuts')

    //
// }
})
      }
    }
    return originalLot
      })(CarLot || {});
// console.log("finished")

