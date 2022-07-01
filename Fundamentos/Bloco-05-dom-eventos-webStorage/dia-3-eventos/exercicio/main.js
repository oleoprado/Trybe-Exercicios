function createDaysOfTheWeek() {
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