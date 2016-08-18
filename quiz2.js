var CarLot = (function(originalLot){

      var input = document.getElementById("input");
      var text = document.getElementById("des");
      var CurrentCar;




      var cars = document.getElementsByClassName("cards")
        console.log(cars)

      originalLot.activateEvents = function(){
        for (var i = 0; i < cars.length; i++){
        cardx = cars[i];
        cardx.addEventListener("click", function(){
        var CurrentCar = event.currentTarget;
        CurrentCar.classList.toggle('selected')
        input.removeAttribute('disabled')
        input.focus();
        // console.log(text.value)

        input.addEventListener("keyup", function(){
          if (event.keycode === 13){
        input.value = "";
        description = CurrentCar.lastChild

            // CurrentCar.lastChild = input.value
          }
        })





console.log('peanuts')

    //
// }
})
      }
    }
    return originalLot
      })(CarLot || {});
// console.log("finished")

