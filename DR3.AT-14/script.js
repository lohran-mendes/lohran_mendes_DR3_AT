// 14 Validação de formulário via JavaScript

// Crie um formulário contendo os campos nome, e-mail e CPF. Obtenha e valide as informações pelo JavaScript. O campo nome não pode estar vazio, o campo e-mail deve possuir um “@” e o campo CPF deve possuir 11 ou 14 caracteres.

const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const botao = document.querySelector("button");
let dadosValidados = false;

form.addEventListener("input", ativaButton);

function ativaButton() {
  if (validaString(nome.value) && validaEmail() && validaCpf()) {
    botao.removeAttribute("disabled");
  } else botao.setAttribute("disabled", true);
}

function validaString(string) {
  if (typeof string === "string" && string.trim().length > 0) {
    return true;
  }
  return false;
}

function validaEmail() {
  if (validaString(email.value) && email.value.includes("@")) {
    return true;
  }
  return false;
}

function validaCpf() {
  if (
    validaString(cpf.value) &&
    (cpf.value.trim().length === 11 || cpf.value.trim().length === 14)
  ) {
    return true;
  }
  return false;
}
