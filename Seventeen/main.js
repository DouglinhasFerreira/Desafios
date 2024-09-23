let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghjiklmnopqrstuvw";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.arieValuemax;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function gerarSenha() {
    let senha = "";
    let n = charset.length; 
    for (let i = 0; i < sliderElement.value; i++) 
    {
        senha += charset.charAt(Math.floor(Math.random() * n))
    }

    
    containerPassword.classList.remove("hide");

    password.innerHTML = senha;
}

function copiarSenha() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(password);
}