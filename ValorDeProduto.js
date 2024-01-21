/* Elabore um algoritmo que calcule o que deve ser pago por um produto,
   considerando o preço normal da etiqueta e a escolha da condição de pagamento.
   Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
   escolhida e efetuar o cálculo adequado.

   Código Condição de Pagamento:
   1 - À vista Debito, recebe 10% de desconto;
   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, preço normal da etiqueta sem juros;
   4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
   */

const precoProduto = 100;
const meioPagamento = 2;

if (meioPagamento === 1) {
    console.log (precoProduto - (precoProduto * 0.1) )
}

else if (meioPagamento === 2) {
    console.log (precoProduto - (precoProduto * 0.15))
}

else if (meioPagamento === 3){
    console.log (precoProduto)
}

else {
    console.log (precoProduto + (precoProduto * 0.1) )
}
   
