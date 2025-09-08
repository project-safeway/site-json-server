const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) window.location.href = "login.html";

const form = document.getElementById("formCadastroAluno");
const alunoIdInput = document.getElementById("alunoId");
const selectEscola = document.getElementById("escolaId");

// Carregar escolas no dropdown
async function carregarEscolas() {
  const res = await fetch("http://localhost:3000/escolas");
  const escolas = await res.json();
  
  selectEscola.innerHTML = "";
  escolas.forEach(escola => {
    const option = document.createElement("option");
    option.value = escola.id;
    option.textContent = escola.nome;
    selectEscola.appendChild(option);
  });
}

carregarEscolas();

// Se vier id na URL, preencher formulário com dados do aluno
const urlParams = new URLSearchParams(window.location.search);
const alunoId = urlParams.get("id");
if (alunoId) {
  fetch(`http://localhost:3000/alunos/${alunoId}`)
    .then(res => res.json())
    .then(aluno => {
      alunoIdInput.value = aluno.id;
      document.getElementById("nome").value = aluno.nome;
      document.getElementById("responsavel1").value = aluno.responsavel1;
      document.getElementById("responsavel2").value = aluno.responsavel2;
      document.getElementById("endereco").value = aluno.endereco;
      document.getElementById("cep").value = aluno.cep;
      document.getElementById("dataNascimento").value = aluno.dataNascimento;
      document.getElementById("dataPagamento").value = aluno.dataPagamento;
      selectEscola.value = aluno.escolaId; // seleciona escola atual
    });
}

// Salvar aluno
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const aluno = {
    usuarioId: usuario.id,
    nome: document.getElementById("nome").value,
    responsavel1: document.getElementById("responsavel1").value,
    responsavel2: document.getElementById("responsavel2").value,
    endereco: document.getElementById("endereco").value,
    cep: document.getElementById("cep").value,
    escolaId: selectEscola.value,
    dataNascimento: document.getElementById("dataNascimento").value,
    dataPagamento: document.getElementById("dataPagamento").value
  };

  const url = alunoIdInput.value
    ? `http://localhost:3000/alunos/${alunoIdInput.value}`
    : "http://localhost:3000/alunos";

  const method = alunoIdInput.value ? "PUT" : "POST";

  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aluno)
  })
  .then(res => res.json())
  .then(() => {
      window.location.href = "poslogin.html";
    alert(`Aluno ${alunoIdInput.value ? "atualizado" : "cadastrado"} com sucesso!`);
  })
  .catch(err => console.error("Erro ao salvar aluno:", err));
});

document.getElementById("btnVoltar").addEventListener("click", () => {
  window.location.href = "poslogin.html";
});
