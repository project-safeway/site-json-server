# Projeto do Grupo 1 - Versão Inicial do Site 
Este repositório contém a **versão inicial do site do Grupo 1**, utilizando **JSON Server** para simular uma API local de usuários. O projeto inclui páginas de login e cadastro, permitindo testar funcionalidades básicas de autenticação. 

## 🔧 Pré-requisitos
Antes de começar, você precisa ter instalado: 
- [Node.js](https://nodejs.org/) (que já inclui o NPM) 
- Extensão **Live Server** no VSCode (ou outro servidor local de sua preferência) 
> ⚠️ Essas ferramentas são necessárias para rodar o JSON Server e abrir os arquivos HTML corretamente.

### ⚙️ Instalando o JSON Server 
Para instalar o JSON Server globalmente, abra o terminal e execute:
```bash
npm install -g json-server
```

### Rodando o JSON Server
```bash
json-server --watch db.json --port 3000
```

### Para parar o servidor
```bash
Ctrl + C
```

O JSON Server ficará ativo e você poderá acessar os dados diretamente no navegador:

```bash
http://localhost:3000/usuarios
```
Através desse caminho é possível observar no seu navegador os usuários cadastrados no sistema


### Abrindo as páginas HTML com Live Server
Para evitar problemas de CORS, não abra os arquivos HTML diretamente. Faça assim:

Clique com o botão direito em login.html (ou cadastro.html / index.html).

Selecione Open with Live Server.

A página abrirá em algo como:
```bash
http://127.0.0.1:5500/login.html
```

⚠️ **Atenção:** Abrir HTML direto com file:// pode causar erros ao fazer requisições fetch para o JSON Server.

💡 **Dica 1:** Use sempre o Live Server para testar cadastro, login e outras funcionalidades que acessam o JSON Server.

💡 **Dica 2:** Use elementos visuais na página para mensagens de sucesso ou erro, evitando alert(), que pode travar redirecionamentos.
