const diasDaSemana = ["Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const button = document.getElementById('button');
const dia = document.getElementById('dia')

function gerarDia () {
   randomDay = diasDaSemana[Math.floor(Math.random() * diasDaSemana.length)];

   dia.innerText = randomDay;
}

button.addEventListener('click', gerarDia)

