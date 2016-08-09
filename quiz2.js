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

          // CurrentCar.addEventListener("mouseout",CurrentCar.style.borderWidth ="2px")
          CurrentCar.addEventListener("click",input.focus())
          input.value =''
       CurrentCar.innerHTML += input.value;
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

