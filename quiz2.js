var CarLot = (function(eventHandlers ){

      var input = document.getElementById("input");
      // var text = document.getElementById("des");
      var CurrentCar;
      var selectedCar;
      var editedCar



    var cars = document.getElementsByClassName("cards")
        console.log(cars)

  originalLot.activateEvents = function(){
      for (var i = 0; i < cars.length; i++){
      cardx = cars[i];
      cardx.addEventListener("click", function(){
      CurrentCar = event.currentTarget
      input.removeAttribute('disabled')
      CarLot.deselectElements();
      input.focus();
    });

    input.addEventListener

        // var CurrentCar = event.currentTarget;
        // CurrentCar.classList.toggle('selected')
        // console.log(text.value)

        input.addEventListener("keyup", function(){
          if (event.keycode === 13){
        input.value = "";
        text.lastChild.innerText = input.value

          }
        })





console.log('peanuts')


  })
  }
}return originalLot
})(CarLot || {});

