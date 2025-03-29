// 4 Métodos de um objeto

// Crie um objeto “carro” que tenha uma propriedade de modelo, estado, preço base e ano. O objeto também deve possuir um método para calcular o valor estimado. Use a propriedade “this”.

// Para calcular o valor estimado utilize o preço base – 1000 para cada ano entre o atual e o ano do carro.
const carro = {
  modelo: "sedan",
  estado: "SP",
  precoBase: 80000,
  ano: 2020,
  valorEstimado() {
    const anoAtual = new Date().getFullYear();
    const valorEstimado = this.precoBase - (anoAtual - this.ano) * 1000;
    return valorEstimado;
  },
};

console.log('Objeto "carro:" ', carro);
console.log("Valor estimado: ", carro.valorEstimado());
