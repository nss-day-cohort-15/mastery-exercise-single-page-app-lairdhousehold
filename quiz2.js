var CarLot = (function(originalLot){
      var input = document.getElementById("input");
      var button = document.getElementById("button");


      var cars = document.getElementsByClassName("cards")
    console.log(cars)

      originalLot.activateEvents = function(){
        for (var i = 0; i < cars.length; i++){
        cardx = cars[i];
        cardx.addEventListener("click", function(event){


          var CurrentCar = event.currentTarget;
          CurrentCar.addEventListener("click", CurrentCar.style.borderWidth ="10px")
          CurrentCar.addEventListener("click",input.value ='')
          CurrentCar.addEventListener("click",input.focus())
          CurrentCar.innerHTML += input.value;
          input.value =''
          // cardx.addEventListener("click", cardx.classlist.add("Selected'))
          // {

          //   CurrentCar.addSelectedClass
          // })


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

