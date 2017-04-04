window.addEventListener('load',function(){
  var codersContainer=document.getElementById('coders');
  var datosCoder=new Coders(allCoder);

  //ejm para añadir coder
  //datosCoder.addCoders("sexta", "assets/images/6-lima/rosario-felix.jpg","Peru");

  datosCoder.coders.forEach(function(e,id){
    var image=document.createElement('img');
    image.setAttribute("id","coder"+id);
    image.setAttribute("class","img-coder "+e.promocion);
    image.src=e.img;
    codersContainer.appendChild(image);
  });

  var classCoder4=document.getElementsByClassName('cuarta');
  var classCoder5=document.getElementsByClassName('quinta');
  var classCoder6=document.getElementsByClassName('sexta');
  var todas=document.getElementsByClassName('img-coder');
  var select=document.getElementById('select');

  function show(element){
    for (var i = 0; i < element.length; i++) {
      element[i].style.display="block";
      element[i].style.display="inline-block";
    }
  }
  function hidden(element1,element2){
    for (var i = 0; i < element1.length; i++) {
      element1[i].style.display="none";
    }
    for (var i = 0; i < element2.length; i++) {
      element2[i].style.display="none";
    }
  }
 console.log(codersContainer);
  select.onchange=function(){
    console.log(select.value);
    switch (select.value) {
      case "todas":show(todas);
        break;
      case "4ta":show(classCoder4); hidden(classCoder5,classCoder6);
        break;
      case "5ta":show(classCoder5); hidden(classCoder4,classCoder6);
        break;
      case "6ta":show(classCoder6); hidden(classCoder4,classCoder5);
        break;
      default:
    }
  }
});
