const emergency = document.getElementsByClassName('emergency-tasks');
emergency[0].style.backgroundColor = "#e85d04";
const h3emergency = document.querySelectorAll('.emergency-h3');
for (h3 of h3emergency) {
  h3.style.backgroundColor = '#ffba08';
  h3.style.color = 'black';
}

const noEmergency = document.getElementsByClassName('no-emergency-tasks');
noEmergency[0].style.backgroundColor = "#ffba08";
const h3noEmergency = document.querySelectorAll('.no-emergency-h3');
for (h3 of h3noEmergency) {
  h3.style.backgroundColor = '#e85d04';
  h3.style.color = 'black';
}
