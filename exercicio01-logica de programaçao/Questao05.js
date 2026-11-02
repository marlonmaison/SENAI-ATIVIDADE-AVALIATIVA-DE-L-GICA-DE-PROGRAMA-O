let valorCompra = 250;
let desconto;
let valorFinal;

if(valorCompra >= 500) {
    desconto = valorCompra * 0.20;
} else if(valorCompra >= 300 && valorCompra < 500) {
    desconto = valorCompra * 0.10;
} else if(valorCompra >= 100 && valorCompra < 300) {
    desconto = valorCompra * 0.05;
} else {
    desconto = 0;
}
    valorFinal = valorCompra - desconto;

console.log("Valor da compra: R$ " + valorCompra);
console.log("valor do desconto: R$ " + desconto);
console.log("Valor final a pagar: R$ " + valorFinal);