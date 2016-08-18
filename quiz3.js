CarLot = (function (originalLot){
  originalLot.resetCards = function(cardArray){
    cardArray.forEach(function(cardx){
      cardx.classList.remove("blue")
    })
  }
  originalLot.styleCard = function(cardx, blue){
    cardx.classList.add(blue)
  }
  originalLot.mirrorText = function(cardx,Input){
    input.addEventListener("keyup", function(){
      if (cardx.classList.contains("blue")){
cardx.querySelector("p").innerHTML = input.value
      }
    })
  }
// })
return originalLot
})(CarLot);
