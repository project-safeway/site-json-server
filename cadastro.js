document.getElementById("formCadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = {
    cnpj: document.getElementById("cnpj").value,
    nome: document.getElementById("nome").value,
    razaoSocial: document.getElementById("razaoSocial").value,
    telefone: document.getElementById("telefone").value,
    cep: document.getElementById("cep").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
  };

  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  })
  .then(res => res.json())
  .then(() => {
    window.location.href = "login.html";
    alert("Cadastro realizado com sucesso!");
  })
  .catch(err => console.error("Erro ao cadastrar usuário:", err));
});

document.getElementById("btnLogin").addEventListener("click",()=>{
  window.location.href = "login.html";
})