//VARIAVEIS
// const myName = "Leonardo";
// const birthCity = "Poços de Caldas";
// let birthYear = "1990"; 
// birthYear = "2100";

// //console.log(myName);
// //console.log(birthCity);
// console.log(birthYear);

//TIPOS PRIMITIVOS e TIPAGEM DINAMICA
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// // console.log(typeof patientId);
// // console.log(typeof isEnrolled);
// // console.log(typeof patientInfo);
// // console.log(typeof patientEmail);
// console.log(typeof patientAge);

// const base = 5;
// let height = 8;
// const area = base * height;

// const perimeter = (base*2) + (height*2);
// console.log(perimeter);

//CONDICOES IF e else
// const nota = 60;

// if (nota >= 80) {
//     console.log("Prabéns, você foi aprovada(o)!")
// } else if (nota < 80 && nota >= 60) {
//     console.log("Você está na nossa lista de espera")
// } else {
//     console.log("Você foi reprovada(o)")
// }

//OPERADORES LOGICOS and, or e not (&&, ||, !)
// const currentHour = 4;
// let message;

// if (currentHour >= 22) {
//     message = "Não deveriamos comer nada, é hora de dormir"
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D"
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour > 11 && currentHour < 14) {
//     message = "Hora do almoço!!!"
// } else if (currentHour >=4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado"
// }
// console.log(message)

// let weekDay = "domingo";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mas um dia de aprendizado na Trybe >:D")
// } else if (weekDay === "sabado" || weekDay === "domingo") {
//     console.log("FINALMENTE, descanso merecido UwU")
// } else {
//     console.log("Dia incorreto")
// }

// SWICH CASE
let processoSeletivo = "aprovada";

switch (processoSeletivo) {
    case "aprovada":
        console.log("Prabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Não se aplica")
}