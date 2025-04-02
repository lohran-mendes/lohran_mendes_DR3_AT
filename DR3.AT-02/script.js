// 2 Criação de objetos aninhados

// Crie um objeto chamado “escola” que possui as propriedades: número de alunos, nome do diretor, ano de fundação e endereço.

// O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

const enderecoDaEscola = {
  rua: "Av. das escolas",
  bairro: "Flor do vale",
  cidade: "Taubaté",
};

const escola = {
  numeroDeAlunos: 500,
  nomeDoDiretor: "Diretor Joãozinho",
  anoDeFundacao: 2000,
  endereco: enderecoDaEscola,
};

console.log('Objeto "escola:" ', escola);
