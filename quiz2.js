function startEvents (inventory){
  var Selectedcars
  var input = document.getElementId= ('input')
  document.querySelector('cards').addEventListener('click', function(event){

    if (event.target.classname ==="cards"){
      Selectedcars = event.target.parentElement
      Selectedcars.style.backgroundColor = "beige"
      Selectedcars.style.borderWidth = "10px"
      input.value =''
      input.focus = ()
      input.addEventlistener('keypress', function(event){
        Selectedcars.innerHTML += input.value;
        input.value =''
        Selectedcars.style.backgroundColor = "white"
        Selectedcars.style.borderWidth = "5px"



      }
        )
      }

    }

  })

}
