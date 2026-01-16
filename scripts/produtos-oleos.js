document.addEventListener("DOMContentLoaded", () => {

  const fechar = document.getElementById('fecharModal');
  const modal = document.getElementById('modalProduto');
  const filtro = document.getElementById('filtroMarca');
  const input = document.getElementById('searchCat');

// Fechar Modal
  if (fechar && modal) {
    fechar.onclick = () => {
      modal.style.display = 'none';
    };
  }

// FUNÇÃO COMBINADA: busca + filtro
  function filtrarProdutos() {
    const marcaSelecionada = filtro.value.toLowerCase();
    const textoBusca = input.value.trim().toLowerCase();

    document.querySelectorAll('.produto-item').forEach(item => {
      const nome = item.querySelector('h3')?.innerText.toLowerCase() || '';
      const marca = item.dataset.marca?.toLowerCase() || '';

      const combinaBusca = nome.includes(textoBusca);
      const combinaMarca = marcaSelecionada === '' || marca === marcaSelecionada;

      item.style.display = (combinaBusca && combinaMarca) ? 'block' : 'none';
    });
  }

  // Eventos
  if (filtro) filtro.addEventListener('change', filtrarProdutos);
  if (input) input.addEventListener('input', filtrarProdutos);
});
