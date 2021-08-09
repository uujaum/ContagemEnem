const proximoEnem = new Date().getFullYear() + 1
const proximoEnemAtual = new Date(`November 21 ${proximoEnem} 13:30:00`)

const atualizaContagem = () => {
  const horaAtual = new Date()
  const diferenca = proximoEnemAtual - horaAtual
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
  const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
  const minutos = Math.floor(diferenca / 1000 / 60) % 60
  const segundos = Math.floor(diferenca / 1000) % 60

  console.log({dias, horas, minutos, segundos})
}

setInterval(atualizaContagem, 1000)