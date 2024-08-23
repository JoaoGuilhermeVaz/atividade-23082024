let produtos = [];


function adicionarProduto(nome, preco, quantidade) {
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.log('Erro: Todos os campos devem ser preenchidos e o preço e a quantidade devem ser maiores que 0.');
        return;
    }


    produtos.push({
        nome: nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade, 10)
    });


    console.log('Produto adicionado com sucesso!');
}


function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.');
        return;
    }


    console.log('Produtos cadastrados:');
    produtos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}: Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}


function calcularValorEstoque() {
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });


    console.log(`Valor total dos produtos em estoque: R$${valorTotal.toFixed(2)}`);
}




adicionarProduto('Produto A', 10.50, 5);
adicionarProduto('Produto B', 20.00, 3);


listarProdutos();


calcularValorEstoque();
