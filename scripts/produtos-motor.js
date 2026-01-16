// MAPA DE SUBGRUPOS POR MARCA
const subgruposPorMarca = {
  "Fiat Ducato": [
    
  ],
  "Mercedes Sprinter": [
    
  ],
  "Renault Master": [
    
  ],
  "Iveco Daily": [
    
  ],
  "Peugeot Boxer": [
    
  ],
  "Citroën Jumper/Jumpy": [
    
  ],
  "Ford Transit": [
    
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const filtroMarca = document.getElementById('filtroMarca');
  const filtroSubgrupo = document.getElementById('filtroSubgrupo');
  const input = document.getElementById('searchCat');

  function atualizarSubgrupos() {
    const marca = filtroMarca.value;
    const subgrupos = subgruposPorMarca[marca] || [];

    filtroSubgrupo.innerHTML = '<option value="">Todos os subgrupos</option>';

    subgrupos.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub;
      filtroSubgrupo.appendChild(option);
    });
  }

  function filtrarProdutos() {
    const marcaSelecionada = filtroMarca.value.toLowerCase();
    const subgrupoSelecionado = filtroSubgrupo.value.toLowerCase();
    const textoBusca = input.value.trim().toLowerCase();

    document.querySelectorAll('.produto-item').forEach(item => {
      const nome = item.querySelector('h3')?.innerText.toLowerCase() || '';
      const marca = item.dataset.marca?.toLowerCase() || '';
      const subgrupo = item.dataset.subgrupo?.toLowerCase() || '';

      const combinaBusca = nome.includes(textoBusca);
      const combinaMarca = marcaSelecionada === '' || marca === marcaSelecionada;
      const combinaSubgrupo = subgrupoSelecionado === '' || subgrupo === subgrupoSelecionado;

      item.style.display = (combinaBusca && combinaMarca && combinaSubgrupo)
        ? 'block'
        : 'none';
    });
  }

  // Eventos
  filtroMarca.addEventListener('change', () => {
    atualizarSubgrupos();
    filtrarProdutos();
  });

  filtroSubgrupo.addEventListener('change', filtrarProdutos);
  input.addEventListener('input', filtrarProdutos);

  // Fechar modal
  const fecharModal = document.getElementById('fecharModal');
  fecharModal.onclick = () => {
    document.getElementById('modalProduto').style.display = 'none';
  };
});
