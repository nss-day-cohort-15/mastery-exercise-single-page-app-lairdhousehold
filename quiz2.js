var CarLot = (function(addEventListenerHandlers ){

      var input = document.getElementById("input");
      var CurrentCar;
      var selectedCar;
      var text;
      var cardx;



    var cars = document.getElementsByClassName("cards")
        console.log(cars)

  originalLot.activateEvents = function(){
      for (var i = 0; i < cars.length; i++){
      cardx = cars[i];
      cardx.addEventListener("click", function(){
        CurrentCar = event.currentTarget
        input.removeAttribute('disabled')
        CarLot.highlightElement(event.currentTarget, "yellow")
        CarLot.deselectElements();
        input.focus();
    });

    input.addEventListener("keyup", function (){
      if (event.keycode===13){
        input.value ="";
      }

      if (currentCar.className ==="col-sm-3 cards"){
        text = CurrentCar.lastchild;
        var userInput = text.value
        text.innerText = userInput
      }
    })

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
//   }
}
return originalLot
})(CarLot || {});

