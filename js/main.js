const diasDaSemana = ["Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const button = document.getElementById('button');
const dia = document.getElementById('dia');
const roleta = document.getElementById('roleta')

function gerarDia () {

   randomDay = diasDaSemana[Math.floor(Math.random() * diasDaSemana.length)];

   roleta.style.display = "flex";
   button.style.display ="none";
   dia.style.display= "none";

      setTimeout(function() {
         dia.innerText = randomDay;
         roleta.style.display = "none";
         button.style.display ="flex";
         button.style.margin ="20% 0 0 0"
         button.textContent = "Sortear Novamente"
         dia.style.display= "flex";
      }, 3000)
      
   
}

button.addEventListener('click', gerarDia)
