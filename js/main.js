const diasDaSemana = ["Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]
const button = document.getElementById('button')

function gerarDia () {
   diasDaSemana[Math.floor(Math.random() * diasDaSemana.length)]
}

button.addEventListener('click', gerarDia )