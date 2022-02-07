//  function anik (taka){
//      console.log("taka diche ", taka);
//      console.log("singra den");
//  }
 
//  var money = 200;
//  anik(money);

function chotoVai(taka){
    console.log("vaiya tk diche ", taka);
    console.log("singara den taratari");

    var singaraPrice =10;
    var singaraQnt =  taka / singaraPrice ;
    return singaraQnt;


}
var money = 100;
var  singara = chotoVai( money);
console.log(singara);