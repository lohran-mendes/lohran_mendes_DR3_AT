// 8 Manipulação de elementos

// Ao clicar em um elemento “ul” de id=”lista”, selecione os elementos “li” descendentes deste elemento “ul’ que possuam a classe “pais” e, a cada clique no elemento “ul”, faça a ação de ativar/desativar a classe “selecionado” dos descendentes selecionados. Além disso, se algum descendente possui o conteúdo “Brasil”, pinte a cor de fundo deste descendente de verde.

// Obs: Pode criar a lista para teste no HTML. Pode criar as classes para te ajudar a verificar a solução.

const lista = document.querySelector("#lista");
const itensDaLista = document.querySelectorAll(".pais");

lista.addEventListener("click", () => {
  Array.from(itensDaLista).forEach((item) => {
    if (item.innerText.toLowerCase() === "brasil") {
      item.style.backgroundColor = "green";
    }
    item.classList.toggle("selecionado");
  });
});
