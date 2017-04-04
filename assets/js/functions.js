function Coders(coders){
  this.coders=coders;
  this.addCoders=function(promo,image,pais){
    this.coders.push({
      promocion:promo,
      img:image,
      pais:pais});
  };
  this.delete=function(id){
    this.coders.splice(id,1);
  };
}
