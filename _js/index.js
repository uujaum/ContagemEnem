const segundosContador = document.querySelector('#segundos');
const minutosContador = document.querySelector('#minutos');
const horasContador = document.querySelector('#horas');
const diasContador = document.querySelector('#dias');

const proximoEnem = new Date().getFullYear() + 1;
const proximoEnemAtual = new Date(`November 21 ${proximoEnem} 13:30:00`);

const atualizaContagem = () => {
  const horaAtual = new Date();
  const diferenca = proximoEnemAtual - horaAtual;
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24) - 365;
  const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
  const minutos = Math.floor(diferenca / 1000 / 60) % 60;
  const segundos = Math.floor(diferenca / 1000) % 60;

  segundosContador.textContent = segundos < 10 ? '0' + segundos : segundos;
  minutosContador.textContent = minutos < 10 ? '0' + minutos : minutos;
  horasContador.textContent = horas < 10 ? '0' + horas : horas;
  diasContador.textContent = dias < 10 ? '0' + dias : dias;
}

setInterval(atualizaContagem, 1000);