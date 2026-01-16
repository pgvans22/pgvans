function carregarProdutos(caminhoJson) {
  fetch(caminhoJson)
    .then(res => res.json())
    .then(data => {

      const container = document.querySelector('#listaProdutos');
      container.innerHTML = '';

      const produtosOrdenados = data.produtos.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );

      produtosOrdenados.forEach(produto => {
        const item = document.createElement('div');
        item.classList.add('produto-item');
        item.dataset.marca = produto.marca;
        item.dataset.subgrupo = produto.subgrupo;

        item.innerHTML = `
          <img src="../assets/produtos/${produto.imagem}" alt="${produto.nome}">
          <h3>${produto.nome}</h3>
          <p>${produto.marca}</p>
        `;
        
        // Modal
        item.addEventListener('click', () => {
          document.getElementById('modalProduto').style.display = 'flex';
          document.getElementById('modalImg').src = '../assets/produtos/' + produto.imagem;
          document.getElementById('modalNome').innerText = produto.nome;
          document.getElementById('modalMarca').innerText = produto.marca;
          document.getElementById('modalDescricao').innerHTML = produto.descricao.replace(/\n/g, '<br>');
        });

        container.appendChild(item);
      });
    })
    .catch(err => console.error('Erro ao carregar produtos:', err));
}
