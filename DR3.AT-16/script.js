// 16 Validação de CEP

// Observe arquivo HTML do formulário e crie uma função que informe se o preenchimento do formulário é válido ou inválido. Não altere o arquivo HTML. A correta validação será referente à:

// Nome com mais de 3 caracteres e menos de 10.
// Pelo menos uma área selecionada.
// Retire os caracteres especiais do CPF (. e -) e verifique se possui 11 caracteres.
// Verifique se a data de agendamento possui o símbolo “/”.
// Transforme o endereço em letras minúsculas e verifique se existe a palavra “rua”.
// Link: https://codesandbox.io/p/sandbox/ydhjz8
// Assim que terminar, salve seu trabalho em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR3_AT.PDF” e poste como resposta a este AT.

const nome = document.querySelector("#nome");
const rh = document.querySelector("#rh");
const seguranca = document.querySelector("#seguranca");
const cpf = document.querySelector("#cpf");
const data = document.querySelector("#data");
const endereco = document.querySelector("#endereco");
const button = document.querySelector("#btnCadastrar");

function validar() {
  event.preventDefault();
  if (
    validaNome() &&
    validaCheckbox() &&
    validaCpf() &&
    validaData() &&
    validaEndereco()
  ) {
    alert("O formulário está válido!");
  } else alert("O formulário não está válido!");
}

function validaNome() {
  const tamanhoNome = nome.value.trim().length;
  if (tamanhoNome > 3 && tamanhoNome < 10) return true;
  return false;
}

function validaCheckbox() {
  if (rh.checked || seguranca.checked) return true;
  return false;
}

function validaCpf() {
  const valorCpf = cpf.value.trim().replace(/[.-]/g, "");
  if (valorCpf.length === 11) return true;
  return false;
}

function validaData() {
  if (data.value.includes("/")) return true;
  return false;
}

function validaEndereco() {
  if (endereco.value.trim().toLowerCase().includes("rua")) return true;
  return false;
}
