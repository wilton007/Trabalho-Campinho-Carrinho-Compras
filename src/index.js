import PromptSync from 'prompt-sync';
const entrada = PromptSync({ sigint: true });

let total = 0;

let Produto = function () {
    this.id = "",
        this.quantidade = "",
        this.nome = "",
        this.preco = "",
        this.subTotal = ""

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
        let produto = null;
        if (escolha == 1) {
            produto = 'banana';
            addCarrinho(escolha, produto, 1.75);
        } else if (escolha == 2) {
            produto = 'maca';
            addCarrinho(escolha, produto, 2.50);
        } else if (escolha == 3) {
            produto = 'laranja';
            addCarrinho(escolha, produto, 2.00);

        }

        console.log("comprar mais alguma coisa? ");
        vf = entrada("(s/n): ");
        console.log('');
    }

}




function addCarrinho(id, nome, preco) {

    let Quantidade = parseInt(entrada('quantos itens: '));
    let intemEncontrado = listaCompras.find(item => item.id === id);
    if (intemEncontrado) {
        intemEncontrado.quantidade += Quantidade;
        intemEncontrado.subTotal += (intemEncontrado.preco * Quantidade);
    } else {
        let p = new Produto();
        p.id = id;
        p.quantidade = Quantidade;
        p.nome = nome;
        p.preco = preco;
        p.subTotal = p.quantidade * p.preco;
        listaCompras.push(p);
    }

}






function calcularValorTotal() {
    total = 0;
    listaCompras.forEach(item => {
        total += item.subTotal;

    });
}

function listarCompras() {

    listaCompras.forEach(item => {
        if (item.quantidade != 0) {
            console.log("Quantidade: " + item.quantidade + " Nome do Produto: " + item.nome + " Valor Unitario :" + item.preco + " Sub Total: " + item.subTotal);
            console.log('');
        }
    });

    if (listaCompras.length === 0) {
        console.log('nao ha produtos no carrinho');
    } else {
        calcularValorTotal();
        console.log('Valor total das compras: R$ ' + total);
    }




}