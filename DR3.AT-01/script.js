// 1 Criação de objeto simples

// Pergunte ao usuário seu nome, idade, e-mail e sexo. Crie um objeto chamado Pessoa que tenha essas propriedades e defina o valor das propriedades conforme os valores digitados pelo usuário.

const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual o seu idade?");
const email = prompt("Qual o seu email?");
const sexo = prompt("Qual o seu sexo?");

const pessoa = {
  nome: nome,
  idade: idade,
  email: email,
  sexo: sexo,
};

console.log('Objeto "pessoa:" ', pessoa);
