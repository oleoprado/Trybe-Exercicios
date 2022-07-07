const btnEnviar = document.getElementById('enviar');
// interrompendo o comportamento padrao do botao submit
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
})