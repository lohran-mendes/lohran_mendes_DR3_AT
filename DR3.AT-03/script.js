// 3 Função construtora

// Pergunte ao usuário o nome do seu país, continente e sua capital. Através de uma função construtora crie um objeto chamado “Pais” que tenha essas propriedades e defina o valor das propriedades conforme os valores digitados pelo usuário.

const nomeDoPais = prompt("Qual o nome do seu país?");
const nomeDoContinente = prompt("Qual o nome do seu continente?");
const nomeDaCapital = prompt("Qual o nome da capital do país informado?");

class Pais {
  nome;
  continente;
  capital;
  constructor(nome, continente, capital) {
    this.nome = nome;
    this.continente = continente;
    this.capital = capital;
  }
}

const paisInformado = new Pais(nomeDoPais, nomeDoContinente, nomeDaCapital);
console.log(paisInformado);
