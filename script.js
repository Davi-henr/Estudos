//Ideia atual será criar a lógica dos botoes de add ao carrinho
//btn ja criado, falta colocar a lógica

// 1. O JS caça SOMENTE os botões que têm a classe específica de compra
const botoesComprar = document.querySelectorAll(.btn-comprar);

// 2. Continua igual: para cada botão dessa lista, ele faz a ação
botoesComprar.forEach(function(botao){

    botao.addEventListener('click', function(){
        alert('Opa, adicionado ao carrinho');
    });
});


//ao clicar no botão [add ao carrinho] ele adiciona a uma grid [pequena tabela temporária]

//esta tabela deverá ficar na lateral dentro de um icone de carrinho, com as seguintes coluns [img produto, qtde. valor]

//dentro desse modal precisa ter dois btn que será [finalizar compra] e [limpar carrinho]

//finalizar compra o btn joga pra uma nova pagina para pagamento, caso finalize ele clear a tabela caso oposto mantem, e o btn clear ele limpa as coluns