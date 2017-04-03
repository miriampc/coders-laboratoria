select.onchange=function(){
  console.log(select.value);
  if(select.value=="4ta"){
    for (var i = 0; i < classCoder.length; i++) {
      classCoder[i].classList.add("4ta");
      classCoder[i].classList.remove("5ta");
      classCoder[i].classList.remove("6ta");
    }
  }
  if(select.value=="5ta"){
    for (var i = 0; i < classCoder.length; i++) {
      classCoder[i].classList.add("5ta");
      classCoder[i].classList.remove("4ta");
      classCoder[i].classList.remove("6ta");
    }
  }
  if(select.value=="6ta"){
    for (var i = 0; i < classCoder.length; i++) {
      classCoder[i].classList.add("6ta");
      classCoder[i].classList.remove("4ta");
      classCoder[i].classList.remove("5ta");
    }
  }
}
