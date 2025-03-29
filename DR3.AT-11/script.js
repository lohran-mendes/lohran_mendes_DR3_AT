// 11 Event Listeners

// Observe o arquivo HTML. Sem modificar este HTML e utilizando event listener faça:

// Ao clicar no elemento “li” de id=”brasil” o conteúdo desta “li” será copiado para o conteúdo do elemento “span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, verde de 1px.
// Ao clicar no elemento “li” de id=”argentina” o conteúdo desta “li” será copiado para o conteúdo do elemento “span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, azul de 1px.
// Link: https://codesandbox.io/p/sandbox/y3fy4t

const itensLista = document.querySelectorAll("li");
const escolhido = document.querySelector("#escolhido");

itensLista.forEach((item) =>
  item.addEventListener("click", (event) => {
    if (event.target.id === "brasil") {
      escolhido.style.border = "solid 1px green";
    } else if (event.target.id === "argentina") {
      escolhido.style.border = "solid 1px blue";
    }
    escolhido.innerText = event.target.innerText;
  })
);
