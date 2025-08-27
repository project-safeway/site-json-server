document.getElementById("formCadastro").addEventListener("submit", function(event) {
  event.preventDefault(); // previne recarregar a página

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha })
  })
  .then(res => res.json())
  .then(() => {
    console.log("Cadastro concluído, redirecionando...");
    // alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html"; // redireciona
  })
  .catch(err => {
    console.error("Erro ao cadastrar:", err);
    alert("Erro ao cadastrar. Veja o console.");
  });
});

//muda para a tela de login pelo botão
document.getElementById("btnLogin").addEventListener("click", function() {
  // Volta para a página de login
  window.location.href = "login.html";
});