// MAPA DE SUBGRUPOS POR MARCA
const subgruposPorMarca = {
  "Fiat Ducato": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Hyundai": ["Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Mercedes Sprinter": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Renault Master": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Iveco Daily": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Peugeot Boxer": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Citroën Jumper/Jumpy": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "Ford Transit": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ],
  "OUTRAS MARCAS": [ "Pastilhas", "Alinhador de Pastilha", "Cilindro Mestre de Freio", "Disco de Freio", "Sensor ABS", "Sensor de Freio", "Reservatório Fluido de Freio", "Tampa Reservatório Freio", "Parafusos de Pinça", "Pinça de Freio", "Hidrovácuo", "Bomba de Vácuo", "Flexível de Freio", "Tubos de Freio", "Cabos de Freio", "Reparos Pinça", "Acionador Automático", "Alavanca Acionamento", "Alavanca de Freio", "Capa Pedal Freio", "Molas de Freio", "Parafuso Fixação Pinça", "Pino de Pinça", "Regulador Pedal Freio", "Pedal Freio", "Reparo Sapata", "Tambor de Freio" ]
};

document.addEventListener("DOMContentLoaded", () => {
  const marcasFiltro = document.getElementById('marcasFiltro');
  const subgruposFiltro = document.getElementById('subgruposFiltro');
  const input = document.getElementById('searchCat');

  let marcaSelecionada = '';
  let subgrupoSelecionado = '';

  function criarCheckbox(texto, container, tipo) {
    const id = `${tipo}-${texto.replace(/\s+/g, '-')}`;
    const wrapper = document.createElement('div');
    wrapper.classList.add('checkbox-item');

    const inputBox = document.createElement('input');
    inputBox.type = 'checkbox';
    inputBox.id = id;
    inputBox.value = texto;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = texto;

    inputBox.addEventListener('change', () => {
      if (tipo === 'marca') {
        marcaSelecionada = inputBox.checked ? texto : '';
        subgrupoSelecionado = '';
        atualizarSubgrupos();
      } else {
        subgrupoSelecionado = inputBox.checked ? texto : '';
      }
      filtrarProdutos();
    });

    wrapper.appendChild(inputBox);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  }

  function atualizarSubgrupos() {
    subgruposFiltro.innerHTML = '';
    if (!marcaSelecionada) return;
    const lista = subgruposPorMarca[marcaSelecionada] || [];
    lista.forEach(sub => criarCheckbox(sub, subgruposFiltro, 'subgrupo'));
  }

  function filtrarProdutos() {
    const textoBusca = input.value.trim().toLowerCase();

    document.querySelectorAll('.produto-item').forEach(item => {
      const nome = item.querySelector('h3')?.innerText.toLowerCase() || '';
      const marca = item.dataset.marca?.toLowerCase() || '';
      const subgrupo = item.dataset.subgrupo?.toLowerCase() || '';

      const okBusca = nome.includes(textoBusca);
      const okMarca = !marcaSelecionada || marca === marcaSelecionada.toLowerCase();
      const okSubgrupo = !subgrupoSelecionado || subgrupo === subgrupoSelecionado.toLowerCase();

      item.style.display = (okBusca && okMarca && okSubgrupo) ? 'block' : 'none';
    });
  }

  // Inicializa os checkboxes de marca
  Object.keys(subgruposPorMarca).forEach(marca => criarCheckbox(marca, marcasFiltro, 'marca'));
  input.addEventListener('input', filtrarProdutos);

  // Fechar modal
  const fecharModal = document.getElementById('fecharModal');
  fecharModal.onclick = () => {
    document.getElementById('modalProduto').style.display = 'none';
  };
});
