
window.onload = () => { 

  teste.onsubmit = (evento) => {

    evento.preventDefault();
    
    ValidationSignIn();

    function ValidationSignIn(){
      
      var email = document.getElementById("Email").value;
      var password = document.getElementById("Password").value;

      var EmailAndPassword = JSON.parse(localStorage.getItem("Registro"));

      if (EmailAndPassword.email == email && EmailAndPassword.password == password){
        alert("Login realizado com sucesso!");
        window.location.href = "homeCadastrado.html";
      }
      else{
        alert("Dados incorretos");
      }
      
    }
  }
}
