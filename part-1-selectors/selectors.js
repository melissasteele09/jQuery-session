let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})



$(document).ready(function() {
  $("label").addClass("green");
  $(".phone").addClass("yellow");
  $("#email").addClass("blue");
  var boxId = $("input[type='checkbox']").attr('id')
  console.log(boxId + ' is checked');
  $("p").find("label").addClass("purple");
  $("#clear-btn").addClass("red");
})
