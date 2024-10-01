// Capturar o botão de compra
const buyButton = document.querySelector('.buy-button');

// Função para exibir uma mensagem de confirmação
function comprarProduto() {
    alert('Obrigado por comprar a Apostila Codi Academy | Node.js!');
    // Aqui, você pode adicionar mais lógica, como redirecionamento para uma página de checkout
}

// Adicionar evento de clique ao botão "Comprar agora"
buyButton.addEventListener('click', comprarProduto);
