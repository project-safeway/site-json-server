document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;
  const divMensagem = document.getElementById("div-mensagem-login"); // pega o div

  fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        localStorage.setItem("usuarioLogado", JSON.stringify(data[0]));
        window.location.href = "poslogin.html";
      } else {
        divMensagem.innerHTML = "E-mail ou senha incorretos!";
        divMensagem.style.color = "red"; //deixa a mensagem vermelha
      }
    })
    .catch(err => {
      divMensagem.innerHTML = "Erro na conexão com o servidor.";
      divMensagem.style.color = "red";//deixa a mensagem vermelha
      console.error(err);
    });
});

document.getElementById("btnCadastrar").addEventListener("click",()=>{
  window.location.href = "cadastro.html";
})