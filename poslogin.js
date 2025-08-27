// Pega o usuário logado do localStorage
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

// Se não houver usuário logado, volta para o login
if (!usuario) {
  window.location.href = "login.html";
} else {
  // Insere a mensagem dentro do div "mensagemBoasVindas"
  document.getElementById("mensagemBoasVindas").innerHTML = `<h2>Bem-vindo, ${usuario.nome}!</h2>`;
}

document.getElementById("btnLogout").addEventListener("click", function() {
  // Remove o usuário do localStorage
  localStorage.removeItem("usuarioLogado");

  // Volta para a página de login
  window.location.href = "login.html";
});