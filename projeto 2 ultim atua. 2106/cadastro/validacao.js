let msgsucesso = document.querySelector('#sucesso')
let msgerro = document.querySelector('#erro')

let nome = document.getElementById('nomec');
let labelnome = document.querySelector('#divNome')
let validnome = false

let nomemat = document.querySelector('#nomem')
let labelnomemat = document.querySelector('#divNomematerno')
let validmat = false

let data = document.querySelector('#data')
let labeldata = document.querySelector('#divdata')
let validdata = false

let cpf = document.querySelector('#cpf')
let labelcpf = document.querySelector('#divcpf')
let validdcpf = false

let telefone = document.querySelector('#campo_celular')
let labeltelefone = document.querySelector('#divtelefonecel')
let validtelefone = false

let telefonefixo = document.querySelector('#campo_fixo')
let labeltelefonefixo = document.querySelector('#divtelefonetel')
let validtelefonefixo = false

let cep = document.querySelector('#cep')
let labelcep = document.querySelector('#divcep')
let validcep = false

let endereco = document.querySelector('#endereco')
let labelendereco = document.querySelector('#divendereco')
let validendereco = false


let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#divsenha')
let validsenha = false


let confirmarsenha = document.querySelector('#confirmarsenha')
let labelconfirmarsenha = document.querySelector('#divconfirmarsenha')
let validconfirmarsenha = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#divemail')
let validemail = false


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 13 || /\s\s/.test(nome.value)){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'nome incorreto </br>' 
        nome.setAttribute('style', 'border-color: red')
        validnome = false
    } else {
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = ''
        nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})


nomemat.addEventListener('keyup', () => {
    if(nomemat.value.length <= 13 || /\s\s/.test(nomemat.value)){
        labelnomemat.setAttribute('style', 'color: red')
        labelnomemat.innerHTML = 'nome incorreto'
        nomemat.setAttribute('style', 'border-color: red')
        validnomemat = false
    } else {
        labelnomemat.setAttribute('style', 'color: green')
        labelnomemat.innerHTML = ''
        nomemat.setAttribute('style', 'border-color: green')
        validnomemat = true
    }
})


function mascaraData(campo, e) {
    var kC = (document.all) ? Event.keyCode : e.keyCode;
    if (kC != 8 && kC != 46) {
        if (data.length == 2) {
            campo.value = data += '/';
        } else if (data.length == 5) {
            campo.value = data += '/';
        } else {
            campo.value = data;
        }
    }
}

function datavalid(retorno){
    if (retorno == true){
        labeldata.setAttribute('style', 'color: green')
        labeldata.innerHTML = ''
        data.setAttribute('style', 'border-color: green')
        validdata = true
    } else {
        labeldata.setAttribute('style', 'color: red')
        labeldata.innerHTML = 'Você precisa ter 18 entre 70 anos para completar o cadastro'
        data.setAttribute('style', 'border-color: red')
        validdata = false  
    }

}

function validadata() {
    var data = document.querySelector("#data").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 18) {
        return false;
    }

    if (idade >= 18 && idade <= 70) {
        return true;
    }

    // se for maior que 70 não vai acontecer nada!
    return false;
}

function validacpf(retorn){
    if (retorn == true ){
        labelcpf.setAttribute('style', 'color: green')
        labelcpf.innerHTML = ''
        cpf.setAttribute('style', 'border-color: green')
        validdcpf = true
    } else {
        labelcpf.setAttribute('style', 'color: red')
        labelcpf.innerHTML = 'Cpf incorreto'
        cpf.setAttribute('style', 'border-color: red')
        validdcpf = false
    }
}

function TestaCPF(strCPF) {

    str = strCPF.replace('.', '').replace('.', '').replace('-', '');
    var cpfmask = str;
    var Soma;
    var Resto;
    Soma = 0;
    if (cpfmask == "00000000000" || cpfmask == "11111111111" || cpfmask == "22222222222" || cpfmask == "33333333333" || cpfmask == "44444444444" || cpfmask == "55555555555" || cpfmask == "66666666666" || cpfmask == "77777777777" || cpfmask == "88888888888" || cpfmask == "99999999999")
        return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpfmask.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpfmask.substring(10, 11))) return false;
    return true;

}

telefone.addEventListener('keyup', () => {
    if(telefone.value.length <= 14){
        labeltelefone.setAttribute('style', 'color: red')
        labeltelefone.innerHTML = 'telefone invalido' 
        telefone.setAttribute('style', 'border-color: red')
        validtelefone = false
    } else {
        labeltelefone.setAttribute('style', 'color: green')
        labeltelefone.innerHTML = ''
        telefone.setAttribute('style', 'border-color: green')
        validtelefone = true
    }
})

telefonefixo.addEventListener('keyup', () => {
    if(telefonefixo.value.length < 14){
        labeltelefonefixo.setAttribute('style', 'color: red')
        labeltelefonefixo.innerHTML = 'telefone invalido' 
        telefonefixo.setAttribute('style', 'border-color: red')
        validtelefonefixo = false
    } else {
        labeltelefonefixo.setAttribute('style', 'color: green')
        labeltelefonefixo.innerHTML = ''
        telefonefixo.setAttribute('style', 'border-color: green')
        validtelefonefixo = true
    }
})


senha.addEventListener('keyup', () => {
    if(senha.value.length <= 10){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'Senha fraca' 
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    } else {
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = ''
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})

confirmarsenha.addEventListener('keyup', () => {
    if(senha.value != confirmarsenha.value){
        labelconfirmarsenha.setAttribute('style', 'color: red')
        labelconfirmarsenha.innerHTML = 'As senhas não são iguais' 
        confirmarsenha.setAttribute('style', 'border-color: red')
        validconfirmarsenha = false
    } else {
        labelconfirmarsenha.setAttribute('style', 'color: green')
        labelconfirmarsenha.innerHTML = ''
        confirmarsenha.setAttribute('style', 'border-color: green')
        validconfirmarsenha = true
    }
})

endereco.addEventListener('keyup', () => {
    if(endereco.value.length < 25){
        labelendereco.setAttribute('style', 'color: red')
        labelendereco.innerHTML = 'Endereço deve conter pelo menos 25 caracteres' 
        endereco.setAttribute('style', 'border-color: red')
        validendereco = false
    } else {
        labelendereco.setAttribute('style', 'color: green')
        labelendereco.innerHTML = ''
        endereco.setAttribute('style', 'border-color: green')
        validendereco = true
    }
})

let ev = /^([_a-zA-Z0-9-]+)(.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

function validate(emaill){
    if(!ev.test(emaill) || emaill.length < 8 ){
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'Email invalido' 
        email.setAttribute('style', 'border-color: red')
        validemail = false
    } else{
        labelemail.innerHTML = ''
        email.setAttribute('style', 'border-color: green')
        validemail = true
    }
}

function cadastrar(){
    if(validemail && validdcpf && validendereco && validnome && validsenha && validtelefone && validtelefonefixo && validnomemat && validconfirmarsenha ){

        let listaUsers = JSON.parse(localStorage.getItem('listaUsers') ||'[]')
        listaUsers.push({
            nome: nome.value,
            nomemat: nomemat.value,
            data: data.value,
            cpf: cpf.value,
            telefone: telefone.value,
            telefonefixo : telefonefixo.value,
            endereco: endereco.value,
            senha: senha.value,
            confirmarsenha: confirmarsenha.value

            
        })
        localStorage.setItem('listaUsers', JSON.stringify(listaUsers))
        msgerro.setAttribute('style', 'display: none')
        msgsucesso.setAttribute('style', 'display: block')
        msgsucesso.innerHTML =' <i class="bi bi-check2-circle"> </i> Cadastrado! redirecionando em 5 segundos...'
        setTimeout(() => {
            window.location.assign("../projeto 2 ultim atua. 2106/login.html")
        }, 5000)


    } else {
        msgsucesso.setAttribute('style', 'display: none')
        msgerro.setAttribute('style', 'display: block')
        msgerro.innerHTML =' <i class="bi bi-exclamation-triangle-fill"> </i> há campos preenchidos incorretamente <i class="bi bi-exclamation-triangle-fill"> </i>'
    }


}

function myFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }


    var x = document.getElementById("confirmarsenha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }







