
window.onload = () => { 
  
  SingUp.onsubmit = (evento) => {
   
    evento.preventDefault();
  

    var VarEmail = email.value;
    var VarConfirmEmail = confirmEmail.value;
    var VarSenha = password.value;
    var VarConfirmSenha = ConfirmPassword.value;

    document.getElementById("cadastro").onclick = function() {SaveLogIn()};
    

    if(validation()) {
      SaveLogIn();

      window.location.href = "login.html";
      
    }
 

function SaveLogIn () {

  //armazenar no localStorage um novo email e a senha

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var EmailAndPassword = { email: email, password: password };

  localStorage.setItem("Registro", JSON.stringify(EmailAndPassword));
  alert("Cadastro realizado com sucesso!");
  
}

  function validation(){
      
    if (VarEmail != VarConfirmEmail || VarSenha != VarConfirmSenha){
      alert("Dados incorretos");
      return false;
    }else{
      return true;
    }
  }
}
} 



