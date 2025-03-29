// 7 Manipulação de texto

// Crie no HTML um elemento “span” de id=”texto” contendo o texto “Fulano” e um elemento “input” de id=”nome”. Crie também um botão que ao ser clicado pegue o texto digitado pelo usuário no input e substitua o conteúdo do elemento “span” com este texto.
const span = document.getElementById("texto");
const input = document.getElementById("nome");

function clicado() {
  span.innerText = input.value;
  input.value = "";
}
