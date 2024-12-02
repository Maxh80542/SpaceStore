// Função para carregar a imagem do produto
function loadProductImage(imageUrl) {
    const imageElement = document.getElementById('product-image');

    // Definir a URL da imagem no elemento <img>
    imageElement.src = imageUrl;
}

// Chame a função passando a URL da imagem do produto que você quer exibir
document.addEventListener('DOMContentLoaded', function() {
    // URL da imagem do produto (Camiseta Oversized)
    const productImageUrl = 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lmz7ardjvoy43e.webp';

    // Carregar a imagem do produto
    loadProductImage(productImageUrl);
});
