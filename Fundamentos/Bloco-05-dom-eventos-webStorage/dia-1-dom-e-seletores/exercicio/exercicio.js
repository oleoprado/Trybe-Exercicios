  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 -Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3-Crie uma função que mude a cor do quadrado vermelho para branco.
 4-Crie uma função que corrija o texto da tag <h1>.
 5-Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6-Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
//1
 function mudaTexto (texto) {
  const textoParagrafo = document.getElementsByTagName('p')[1];
  textoParagrafo.innerText = texto;
 }
 mudaTexto('Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.In elementis mé pra quem é amistosis quis leo.Interagi no mé, cursus quis, vehicula ac nisi.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.')

 //2
 function mudaCorMain (cor) {
  const containerMain = document.getElementsByTagName('main')[0];
  containerMain.style.backgroundColor = cor;
 }
 mudaCorMain('rgb(76,164,109)')

 //3
 function mudaCorSection (cor) {
  const section = document.getElementsByClassName('center-content')[0];
  section.style.backgroundColor = cor;
 }
mudaCorSection('white')

//4
function corrigeTexto (texto) {
  const tituloPagina = document.getElementsByClassName('title')[0];
  tituloPagina.innerText = texto;
}
corrigeTexto('Exercício 5.1 - JavaScript')

//5 
