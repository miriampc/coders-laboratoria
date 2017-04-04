function Coders(coders){
  this.coders=coders;
  this.addCoders=function(promo,image,pais){
    this.coders.push({
      promocion:promo,
      img:image,
      pais:pais});
  };
  //Metodo a implementar a futuro
  this.deleteCoders=function(id){
    this.coders.splice(id,1);
  };
}
