CarLot = (function(originalLot){
  originalLot.activateEvents = function(){
  var cardArray = document.querySelectorAll(".cards")
    cardArray.forEach(function(cardx){
      console.log(cardArray)
        cardx.addEventListener("click", function(){
          var input = document.querySelector("#input");
          input.value = "";
          input.focus();
          CarLot.resetCards(cardArray)
          CarLot.styleCard(cardx,"blue");
          CarLot.mirrorText(cardx, input)
          })
      })
    }
  // });
return originalLot
})(CarLot || {});
