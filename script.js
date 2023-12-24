const produtos = [
    { 
        image:'../img/lightweight-jacket.png',
        tag: 'Jaqueta',
        title: 'Lightweight Jacket',
        description: 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...',
        price: 300,
        cart: 'Adicionar ao carrinho',
    },

    { 
        image:'../img/elegance-jacket.png',
        tag: 'Jaqueta',
        title: 'Elegance Jacket',
        description: 'Roupas elegantes para eventos especiais, trazendo sofisticação e uma boa impressão de primeira...',
        price: 500,
        cart: 'Adicionar ao carrinho',
    },

    { 
        image:'../img/over-shirt.png',
        tag: 'Camiseta',
        title: 'Over shirt',
        description: 'Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional...',
        price: 120,
        cart: 'Adicionar ao carrinho',
    },

    { 
        image:'../img/super-over-shirt.png',
        tag: 'Camiseta',
        title: 'Super Over Shirt',
        description: 'Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional...',
        price: 180,
        cart: 'Adicionar ao carrinho',
    },

    { 
        image:'../img/minimal-jacket.png',
        tag: 'Jaqueta',
        title: 'Minimal Jacket',
        description: 'Adicione elegância e estilo em seu guarda roupa com nossas camiseta de manga longa basicas ...',
        price: 150,
        cart: 'Adicionar ao carrinho',
    },

    { 
        image:'../img/weather-shirts.png',
        tag: 'Camisetas',
        title: 'Weather Shirts',
        description: 'Cores vibrantes e uma energia sem igual é o que você precisa ter no seu guardada roupa de primavera...',
        price: 115,
        cart: 'Adicionar ao carrinho',
    },

];


const containerCards = document.querySelector(".container-cards");

for (let i = 0; i < produtos.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imagem = document.createElement("img");
  imagem.src = produtos[i].image;
  imagem.classList = ('imagem')

  const etiqueta = document.createElement("p");
  etiqueta.innerText = produtos[i].tag;
  etiqueta.classList.add('etiqueta')

  const titulo = document.createElement("p");
  titulo.innerText = produtos[i].title;
  titulo.classList.add('titulo')

  const descricao = document.createElement("p");
  descricao.innerText = produtos[i].description;
  descricao.classList.add('descricao')

  const preco = document.createElement("p");
  preco.innerText = produtos[i].price.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
  preco.classList = ('preco')

  const carrinho = document.createElement("p");
  carrinho.innerText = produtos[i].cart;
  carrinho.classList = ('carrinho')


  card.appendChild(imagem);
  card.appendChild(etiqueta);
  card.appendChild(titulo);
  card.appendChild(descricao);
  card.appendChild(preco);
  card.appendChild(carrinho);
  

  containerCards.appendChild(card);
}

// const containerCart = document.querySelector(".container-cart");
// for (let i = 0; i < produtos.length; i++) {
//     const itensCarrinho = document.createElement("div");
//     itensCarrinho.classList.add("itensCarrinho");

//     const imagem = document.createElement("img");
//     imagem.src = produtos[i].image;
//     imagem.classList = ('imagem')

//     const preco = document.createElement("p");
//     preco.innerText = produtos[i].price.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
//     preco.classList = ('preco')

//     const carrinho = document.createElement("p");
//     carrinho.innerText = produtos[i].cart;
//     carrinho.classList = ('carrinho')

//     itensCarrinho.appendChild(imagem);
//     itensCarrinho.appendChild(preco);
//     itensCarrinho.appendChild(carrinho);

//     containerCart.appendChild(itensCarrinho);
// }

