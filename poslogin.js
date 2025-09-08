const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) window.location.href = "login.html";

document.getElementById("mensagemBoasVindas").innerHTML = `<h2>Bem-vindo, ${usuario.nome}!</h2>`;

async function carregarAlunos() {
  // Busca alunos
  const resAlunos = await fetch(`http://localhost:3000/alunos?usuarioId=${usuario.id}`);
  const alunos = await resAlunos.json();

  // Busca todas as escolas
  const resEscolas = await fetch("http://localhost:3000/escolas");
  const escolas = await resEscolas.json();

  const tbody = document.querySelector("#tabelaAlunos tbody");
  tbody.innerHTML = ""; // limpa tabela antes de preencher

  alunos.forEach(aluno => {
    const escola = escolas.find(e => e.id == aluno.escolaId); // encontra escola pelo id
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.responsavel1}</td>
      <td>${aluno.responsavel2 || "-"}</td>
      <td>${aluno.endereco || "-"}</td>
      <td>${aluno.cep || "-"}</td>
      <td>${escola ? escola.nome : "-"}</td>
      
      <td>
        <button class="editar">Editar</button>
        <button class="deletar">Deletar</button>
      </td>
    `;
/**
 * removi dois campos da exibição: 
 *    <td>${aluno.dataNascimento || "-"}</td>
      <td>${aluno.dataPagamento || "-"}</td> 
 * */ 

    tr.querySelector(".editar").onclick = () => {
      window.location.href = `cadastroAluno.html?id=${aluno.id}`;
    };
    tr.querySelector(".deletar").onclick = () => {
      if (confirm(`Deseja realmente excluir ${aluno.nome}?`)) {
        fetch(`http://localhost:3000/alunos/${aluno.id}`, { method: "DELETE" })
          .then(() => carregarAlunos());
      }
    };

    tbody.appendChild(tr);
  });
}

carregarAlunos();

document.getElementById("btnLogout").addEventListener("click", function() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});