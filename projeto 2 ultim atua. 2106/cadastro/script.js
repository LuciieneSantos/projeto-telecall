
// //validação formulario
// const form = document.getElementById('form')
// const nomeCompleto = document.getElementById(' nomeCompleto') 
// const nomeMaterno = document.getElementById(' nomeMaterno')
// const dataDeNascimento = document.getElementById('datadenascimento')
// const cpf = document.getElementById('cpf')
// const telefoneCelular = document.getElementById(' telefoneCelular')
// const telefoneFixo = document.getElementById('telefoneFixo')
// const cep = document.getElementById('cep')
// const endereço = document.getElementById('endereço')
// const cidade = document.getElementById(' cidade')
// const estado = document.getElementById('estado ')
// const bairro = document.getElementById('bairro')
// const numeroDaRua = document.getElementById('numeroDaRua')
// const senha = document.getElementById(' senha')
// const confirmarSenha =  document.getElementById('confirmarSenha')
// const email = document.getElementById('email')


// function checkInputs() {

//     const nomeCompletoValue = nomeCompleto.value.trim()
//     const nomeMaternoValue = nomeMaterno.value.trim()
//     const dataDeNascimentoValue = dataDeNascimento.value.trim()
//     const cpfValue = cpf.value.trim()
//     const telefoneCelularValue =telefoneCelular.value.trim()
//     const telefoneFixoValue =telefoneFixo.value.trim()
//     const cepValue =cep.value.trim()
//     const endereçoValue =endereço.value.trim()
//     const cidadeValue =cidade.value.trim()
//     const estadoValue =estado.value.trim()
//     const bairroValue =bairro.value.trim()
//     const numeroDaRuaValue =numeroDaRua.value.trim()
//     const senhaValue =senha.value.trim()
//     const confirmarSenhaValue = confirmarSenha.value.trim()
//     const emailValue = email.value.trim()
    


//     if(nomeCompletoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(nomeCompleto, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(nomeCompleto)
//     }

//     if( nomeMaternoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(nomeMaterno, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( nomeMaterno)
//     }

//     if( dataDeNascimentoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(dataDeNascimento, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( dataDeNascimento)
//     }

//     if( cpfValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(cpf, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( cpf)
//     }

//     if( telefoneCelularValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(telefoneCelular, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( telefoneCelular)
//     }

//     if( telefoneFixoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(telefoneFixo, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( telefoneFixo)
//     }

//     if( cepValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(cep, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(cep)
//     }

//     if( endereçoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(endereço, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(endereço)
//     }

//     if( cidadeValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(cidade, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(cidade)
//     }

//     if(estadoValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(estado, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(estado)
//     }

//     if(bairroValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(bairro, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(bairro)
//     }


//     if( numeroDaRuaValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor( numeroDaRua, 'Preencha esse campo')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor( numeroDaRua)
//     }

   
   
   
//     if(senhaValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(senha, 'Preencha esse campo')

//     } else if(passwordValue.length < 8) { 
//         setErrorFor(senha, 'Senha deve ter 8 caracteres')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(senha)
//     }

//     if(confirmarSenhaValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(passwordtwo, 'Preencha esse campo')

//     } else if(senhaValue !== confirmarSenhaValue) { 
//         setErrorFor(confirmarSenha, 'Senhas não tão iguais')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(confirmarSenha)
//     }

//     if(emailValue === '') {
//         // mostrar erro
//         // add classe
//         setErrorFor(email, 'Preencha esse campo')
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Email inválido')
//     } else {
//         // adicionar a classe de sucesso
//         setSuccessFor(email)
//     }

   

// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small')

//     small.innerText = message

//     formControl.className = 'form-control error'
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;

//     formControl.className = 'form-control success'
// }

// function isEmail(email) {
//     return /^(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
// }




//cpf
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

// telefone 
function tel(e) {
    var x = e.value.replace(/\D/g, '').match(/(\d{2})(\d{4})(\d{4})/);
    e.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
 
}




//celular
function cel(e) {
    var x = e.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    e.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
 
} 


// function cadastrar(){
//     if(nomeCompleto.value&&nomeMaterno.value&&dataDeNascimento.value&&cpf.value&&telefoneCelular.value&&telefoneFixo.value&&cep.value&&endereço.value&&cidade.value&&estado.value&&bairro.value&&numeroDaRua.value&&login.value&&senha.value&&confirmarSenha.value&&email.value){
//         window.location.assign('./login.html')
//     } 
    

// }





 