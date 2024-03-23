import PromptSync from 'prompt-sync';
const entrada = PromptSync({ sigint: true });

let total = 0;

let produto1 = {
    id: 1, 
    quantidade: 0, 
    nome: "banana", 
    preco: 1.50, 
    subTotal: 0

}
let produto2 = {
    id: 2, 
    quantidade: 0, 
    nome: "maca", 
    preco: 1.75, 
    subTotal: 0 

}
let produto3 = {
    id: 3, 
    quantidade: 0, 
    nome: "laranja", 
    preco: 2.50, 
    subTotal: 0

}


let listaCompras = [];

let sair = 'n';

while (sair == 'n') {

    console.log("1 comprar\n2 ver lista de compra\n3 pagar\n4 sair");

    let escolha = entrada('escolha uma opcao: ');

    switch (escolha) {
        case '1':
            loja();
            break;
        case '2':
            listarCompras();
            break;
        case '3':

            break;
        case '4':
            sair = 's';
            console.log('saindo...');
            break;
    }
    console.log('');

}



function loja() {

    let vf = 's';

    while (vf == 's') {

        console.log("1 banana\n2 maçã\n3 laranja");
        let escolha = parseInt(entrada("escolha uma opcao: "));
        addCarrinho(escolha);

        console.log("comprar mais alguma coisa? ");
        vf = entrada("(s/n): ");
        console.log('');
    }

}




function addCarrinho(id) {

    let Quantidade = parseInt(entrada('quantos itens: '));
    let intemEncontrado = listaCompras.find(item => item.id === id);
    if (intemEncontrado) {
        intemEncontrado.quantidade += Quantidade;
        intemEncontrado.subTotal += (intemEncontrado.preco * Quantidade);
    } else {
        listaCompras.push(produto1)
    }

}






function calculaValorTotal(valor) {
    total += valor;
}

function listarCompras() {
    
    listaCompras.forEach(item => {
        if (item.quantidade != 0) {
            console.log("Quantidade: " + item.quantidade + " Nome do Produto: " + item.nome + " Valor Unitario :" + item.preco + " Sub Total: " + item.subTotal);
            calculaValorTotal(item.subTotal);
            console.log('');
        } 

        if(item.quantidade == 0){
            console.log('nao ha produtos no carrinho');
        }
    });
    
        console.log('Valor total das compras: R$ ' + total);

  

}