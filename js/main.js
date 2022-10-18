const diasDaSemana = ["Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const button = document.getElementById('button');
const dia = document.getElementById('dia');
const roleta = document.getElementById('roleta')

function gerarDia () {
   randomDay = diasDaSemana[Math.floor(Math.random() * diasDaSemana.length)];
   roleta.style.display = "flex";
setTimeout(function() {
   dia.innerText = randomDay;
   roleta.style.display = "none";
 }, 3000)
  
   
}

button.addEventListener('click', gerarDia)


