function mascara(i) {
    var v = i.value;
    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
  }


 //Inicio da função de entrar
function entrar() {
    //Chamando os inputs e labels
    var cpf = document.getElementById("cpf")
    var labelCpf = document.getElementById("labelcpf")

    var senha = document.getElementById("senha")
    var labelSenha = document.getElementById("labelsenha")
        //Mensagens de erro e sucesso
    var msgError = document.getElementById("erro")
    var msgSuccess = document.getElementById("sucesso")
        //Define uma lista vazia
    var listaUsers = []
        //Lista com dados que irá puxar do localStorage
    var userValid = []
        //Coleta do localStorage a lista
    listaUsers = JSON.parse(localStorage.getItem('listaUsers'))
        //Coleta os dados do localStorage
    listaUsers.forEach((item) => {
        if (cpf.value == item.cpf && senha.value == item.senha) {
            userValid = {
                cpf: item.cpf,
                senha: item.senha
            }
        }
    })
    if (cpf.value == userValid.cpf && senha.value == userValid.senha) {
        //Token para deslogar o usuario sem apagar o localStorage inteiro
        var token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
            //Retira mensagem de erro caso haja
        msgError.setAttribute('style', 'display: none')
            //Faz aparecer a mensagem de sucesso
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = ' Logado! Redirecionando à página principal...'
            //Borda verde
        cpf.setAttribute('style', 'border-color: green')
        senha.setAttribute('style', 'border-color: green')
            //Define um tempo de espera para o redirecionamento
        setTimeout(() => {
            window.location.assign("../projeto 2 ultim atua. 2106/tela principal/principal.html")
        }, 3000)
    } else {
        //Define estilo da mensagem de erro
        cpf.setAttribute('style', 'border-color: red')
        senha.setAttribute('style', 'border-color: red')
            //Aparece a mensagem de erro
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = ' Usuário ou senha inválidos!'
            //Faz o foco do usuario ser o input de cpf
        cpf.focus()

    }
}
//Compara para ver se os dados digitados são corretos

function myFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }


   
  }