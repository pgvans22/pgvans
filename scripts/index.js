const arquivos = [
  'data/produtos-freios.json',
  'data/produtos-motor.json',
  'data/produtos-oleos.json',
  'data/produtos-suspensao.json',
  'data/produtos-transmissao.json'
];

let todosProdutos = [];

async function carregarProdutosGlobais() {
  const promessas = arquivos.map(arquivo => fetch(arquivo).then(res => res.json()));
  const dados = await Promise.all(promessas);
  todosProdutos = dados.flatMap(d => d.produtos);
}

function buscaInteligente(termo) {
  const palavras = termo.toLowerCase().split(" ");
  return todosProdutos.filter(produto => {
    const texto = (
      produto.nome + " " + produto.descricao + " " + produto.marca
    ).toLowerCase();
    return palavras.every(palavra => texto.includes(palavra));
  });
}

function exibirResultados(resultados) {
  const container = document.querySelector(".grid");
  container.innerHTML = "";

  resultados.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="assets/produtos/${produto.imagem}" alt="${produto.nome}">
      <div class="title">${produto.nome}</div>
      <p>${produto.marca}</p>
    `;
    // Adionar eventos para abrir Modal
    card.addEventListener("click", () => {
      document.getElementById("modalProduto").style.display = "flex";
      document.getElementById("modalImg").src = "assets/produtos/" + produto.imagem;
      document.getElementById("modalNome").innerText = produto.nome;
      document.getElementById("modalMarca").innerText = produto.marca;
      document.getElementById("modalDescricao").innerHTML = produto.descricao.replace(/\n/g, "<br>");
    });
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await carregarProdutosGlobais();

  const input = document.getElementById("search");
  input.addEventListener("keyup", () => {
    const termo = input.value.trim();
    if (termo.length > 0) {
      const resultados = buscaInteligente(termo);
      exibirResultados(resultados);
    } else {
      location.reload(); // recarrega os cards padrão
    }
  });

  // 🔧 Aqui entra o código de fechar modal
  const fechar = document.getElementById("fecharModal");
  if (fechar) {
    fechar.addEventListener("click", () => {
      document.getElementById("modalProduto").style.display = "none";
    });
  }
});
