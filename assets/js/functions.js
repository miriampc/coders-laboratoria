function Coders(coders){
  this.coders=coders;
  this.addCoders=function(promo,image,pais){
    this.coders.push({
      promocion:promo,
      imagen:image,
      pais:pais});
  }
}
