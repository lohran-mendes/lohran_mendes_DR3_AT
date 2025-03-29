// 6 Criação de elementos no DOM

// No HTML crie um elemento “div” de id “container” e um elemento “button” com texto “inserir” que ao ser clicado, criará um elemento “h2” com texto “Titulo inserido” e o adicionará ao elemento “div” de id “container”.

function inserir() {
  const container = document.getElementById("container");
  container.innerHTML = "<h2>Titulo inserido</h2>";
}
