/* function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1
function createDecemberDays() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const decemberDays = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayList = document.createElement('li');
    dayList.innerHTML = day;

    if (day === 24 || day === 31) {
      dayList.className = 'day holiday';
      decemberDays.appendChild(dayList);
    } else if (day === 4 || day === 11 || day === 18) {
      dayList.className = 'day friday';
      decemberDays.appendChild(dayList);
    } else if (day === 25) {
      dayList.className = 'day holiday friday';
      decemberDays.appendChild(dayList);
    } else {
      dayList.className = 'day'
      decemberDays.appendChild(dayList);
    }
  }
}
createDecemberDays();

//2
function createButtonHolidays(nameButton) {
  const btnHolidays = document.querySelector('.buttons-container');
  const btnFeriados = document.createElement('button');
  btnFeriados.setAttribute('id', 'btn-holiday');
  btnFeriados.innerText = nameButton;

  btnHolidays.appendChild(btnFeriados);
}
createButtonHolidays('Feriados');

//3
function changeBackgroundColorHolidays() {
  const pegarBtnHolidays = document.querySelector('#btn-holiday');
  const holidays = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const newBackgroundColor = 'green';

  pegarBtnHolidays.addEventListener('click', function () {
    for (let i = 0; i < holidays.length; i++) {
      if (holidays[i].style.backgroundColor === newBackgroundColor) {
        holidays[i].style.backgroundColor = backgroundColor;
        holidays[i].style.color = '#666';
      } else {
        holidays[i].style.backgroundColor = newBackgroundColor;
        holidays[i].style.color = 'rgb(238,238,238)';
      }
    }
  })
}
changeBackgroundColorHolidays();

//4 
function createBtnFridays (nameButton) {
  const btnFridays = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = nameButton;

  btnFridays.appendChild(btnFriday);
}
createBtnFridays('Sexta-Feira');

//5 // verificar logica reversa
function changeTxtFriday (string) {
 const fridays = document.querySelectorAll('.friday');
 const btnFriday = document.getElementById('btn-friday');
 let retornoDias = [];

 for(let i = 0; i < btnFriday.length; i += 1) {
  retornoDias[i] = btnFriday[i].innerText;
 }

 btnFriday.addEventListener('click', function (){
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== string) {
      fridays[index].innerText = string;
    } else {
      fridays[index].innerText = retornoDias[index];
    }
  }
 });

}
changeTxtFriday('sextou!');

//6 

function zoomIn () {
  const selecionarDias = document.getElementById('days');

  selecionarDias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
  })
}
zoomIn();

function zoomOut () {
  const selecionarDias = document.getElementById('days');

  selecionarDias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  })
}
zoomOut();

//7 
function adicionaTarefa (string) {
  const listaTarefas = document.querySelector('.my-tasks');
  const tarefas = document.createElement('span');
  tarefas.innerText = string;

  listaTarefas.appendChild(tarefas);
}
adicionaTarefa('cozinhar');

//8 

for (let index of dias) {
  index.addEventListener("click", addColor);
}
function addColor(event) {
  let corTarefa = document.querySelector(".selected");
  if (corTarefa !== null) {
    if (corTarefa.style.backgroundColor === event.target.style.color) {
      event.target.style.color = "rgb(119,119,119)";
    } else {
      event.target.style.color = corTarefa.style.backgroundColor;
    }
  }
}

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek(); */

//🚀 Exercício 1:

function createDays() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let decemberDay = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    // console.log(decemberDaysList[index]); // mostou no console e está funcionando o for
    let day = decemberDaysList[index];
    dayListItem = document.createElement("li");
    dayListItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayListItem.classList = "day holiday";
      decemberDay.appendChild(dayListItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayListItem.classList = "day friday";
      decemberDay.appendChild(dayListItem);
    } else if (day === 25) {
      dayListItem.classList = "day holiday friday";
      decemberDay.appendChild(dayListItem);
    } else {
      dayListItem.classList = "day";
      decemberDay.appendChild(dayListItem);
    }
  }
}
createDays();

//🚀 Exercício 2:

function createHolidayButton(recebeParametro) {
  let localClasse = document.querySelector(".buttons-container");
  let novoButton = document.createElement("button");
  novoButton.innerHTML = recebeParametro;
  //novoButton.id = 'btn-holiday'; ou com setAttribute, exemplo abaixo
  novoButton.setAttribute("id", "btn-holiday"); // primeiro valor e o segundo paramentro
  localClasse.appendChild(novoButton);
}
createHolidayButton("Feriados");

//🚀 Exercício 3:

function alteraBackgroundButton() {
  let buttonAction = document.querySelector("#btn-holiday");
  let localizaClassHoliday = document.querySelectorAll(".holiday");
  const backgroundColor = 'rgb(238,238,238)';
  const newBackgroundColor = 'green';

  buttonAction.addEventListener("click", function () {
    for (let index = 0; index < localizaClassHoliday.length; index += 1) {
      if (localizaClassHoliday[index].style.backgroundColor === novaColor) {
        localizaClassHoliday[index].style.backgroundColor = colorPadrao;
      } else {
        localizaClassHoliday[index].style.backgroundColor = novaColor;
      }
    }
  });
}
alteraBackgroundButton();

// 🚀 Exercício 4:

function criaBotao(newbutton, newid) {
  // let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let buttonsContainer = document.querySelector(".buttons-container");
  let btnCriacao = document.createElement("button");
  btnCriacao.innerText = newbutton;
  btnCriacao.id = newid;
  buttonsContainer.appendChild(btnCriacao);
}
criaBotao("Sexta-feira", "btn-friday");

// 🚀 Exercício 5:

function mudaTextoSexta(string) {
  let buttonSexta = document.getElementById("btn-friday");
  let classFriday = document.getElementsByClassName("friday");
  let retornaDias = [];

  for (let index = 0; index < classFriday.length; index += 1) {
    retornaDias[index] = classFriday[index].innerText;
  }

  buttonSexta.addEventListener("click", function () {
    for (let index = 0; index < classFriday.length; index += 1) {
      if (classFriday[index].innerText !== string) {
        classFriday[index].innerText = string;
      } else {
        classFriday[index].innerText = retornaDias[index];
      }
    }
  });
}
mudaTextoSexta("SEXTOU");

//🚀 Exercício 6:

let selecinarDias = document.getElementById("days");
let dias = document.getElementsByClassName("day");

for (let index = 0; index < dias.length; index += 1) {
  selecinarDias.addEventListener("mouseover", zoomIn);
  selecinarDias.addEventListener("mouseout", zoomOut);
}

function zoomIn(event) {
  // event.target.style.fontSize = '40px';
  event.target.classList.add("diaZoom");
}

function zoomOut(event) {
  // event.target.style.fontSize = '20px';
  event.target.classList.remove("diaZoom");
}

//🚀 Exercício 7:

function adicionaTarefas(string) {
  let listaTarefas = document.querySelector(".my-tasks");
  let tarefas = document.createElement("span");
  tarefas.innerText = string;
  listaTarefas.appendChild(tarefas);
}

adicionaTarefas("cozinha");

//🚀 Exercício 8:

function corLegenda(cor) {
  let listaTarefas = document.querySelector(".my-tasks");
  let coresTarefas = document.createElement("div");

  coresTarefas.className = "task";
  coresTarefas.style.backgroundColor = cor;

  listaTarefas.appendChild(coresTarefas);
}
corLegenda("red");

// 🚀 Exercício 9:

let coresTarefas = document.querySelector(".task");
coresTarefas.addEventListener("click", atribuiClasse);

function atribuiClasse() {
  if (coresTarefas.classList.contains("selected")) {
    coresTarefas.classList.remove("selected");
  } else {
    coresTarefas.classList.add("selected");
  }
}

//🚀 Exercício 10:

// dias - foi usado no exercicio Exercício 6
for (let index = 0; index < dias.length; index += 1) {
  dias[index].addEventListener("click", adicionarCor);
}

/*
for (let index of dias) {
  index.addEventListener("click", addColor);
}
*/

function adicionarCor(event) {
  let selecionado = document.querySelector(".selected");
  if (selecionado !== null) {
    if (selecionado.style.backgroundColor === event.target.style.color) {
      event.target.style.color = "rgb(119, 119, 119)";
    } else {
      event.target.style.color = selecionado.style.backgroundColor;
    }
  }
}

// 🚀 Bônus:

let botaoAdicinar = document.getElementById("btn-add");
let inputCompromisso = document.getElementById("task-input");
botaoAdicinar.addEventListener("click", adicionaCompromissoBotao);
inputCompromisso.addEventListener("keyup", adicionaCompromissoEnter);

function adicionaCompromissoBotao() {
  let localizaUL = document.getElementsByClassName("task-list")[0];
  let criaLi = document.createElement("li");
  criaLi.innerText = inputCompromisso.value;
  localizaUL.appendChild(criaLi);

  if (inputCompromisso.value === "") {
    alert("Insira seu compromisso");
  }
}


function adicionaCompromissoEnter(event) {
  let teclaEnter = event.key;  
  if (teclaEnter == "Enter") { 
    let localizaUL = document.getElementsByClassName("task-list")[0];
    let criaLi = document.createElement("li");
    
    criaLi.innerText = inputCompromisso.value;
    localizaUL.appendChild(criaLi);    
  
    if (inputCompromisso.value === "") {
      alert("Insira seu compromisso");
    }
    inputCompromisso.value = '';    
  }
}
















