// 12 Eventos e atributos

// Adicione um evento que capture a passagem do mouse por cima dos elementos “li” do arquivo HTML. Faça:

// Caso o elemento “li” possua a classe “azul” faça com que este elemento ganhe a cor de texto azul, através da aplicação de estilo.
// Caso o elemento “li” possua a classe “verde” faça com que este elemento ganhe a cor de texto verde, através da aplicação de estilo.
// Link: https://codesandbox.io/p/sandbox/q9k24n

const itensLista = document.querySelectorAll("li");

itensLista.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (item.classList.contains("azul")) {
      item.style.color = "blue";
    } else if (item.classList.contains("verde")) {
      item.style.color = "green";
    }
  });
  item.addEventListener("mouseleave", () => (item.style.color = "black"));
});
