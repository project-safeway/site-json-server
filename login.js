document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        // Salva o usuário logado no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(data[0]));

        // Redireciona para a página pós-login
        window.location.href = "poslogin.html";
      } else {
        alert("E-mail ou senha incorretos!");
      }
    });
});

//muda para a tela de cadastro pelo botão
document.getElementById('btnCadastrar').addEventListener('click',
    function(){
        window.location.href = "cadastro.html";
    }
);