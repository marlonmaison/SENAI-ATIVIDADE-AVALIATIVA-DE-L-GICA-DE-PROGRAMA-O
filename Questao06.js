let estoque = 100;
let quantidadeSolicitada = 70; 

if(estoque == 0){
    console.log("Produto indisponivel");
} else if(quantidadeSolicitada <= estoque) {
    console.log("Venda autorizada");
} else {
    ("Estoque insuficiente");
}