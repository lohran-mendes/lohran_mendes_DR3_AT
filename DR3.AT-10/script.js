// 10 Lidando com eventos

// Adicione um evento que capture e informe através de alerta cada caracter digitada em um input de id “email”.

const input = document.getElementById("email");
input.addEventListener("keyup", (event) => {
  alert("Caractere digitado: " + event.key);
});
