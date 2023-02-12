import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const p1 = new Person('léo', new Date('1990-08-06'));
// console.log(p1);

const stu1 = new Student('Karl', new Date('1934-02-11'));
stu1.examsGrades = [10,5,7,8];
stu1.assignmentsGrades = [7, 6];
// console.log(stu1);

const mat = new Subject('mat');
const his = new Subject('história');
const fil = new Subject('filosofia');
// console.log(sub1.subject = 'a');
// console.log(sub2);
// console.log(sub3);

const cleide = new Teacher(
  'Cleide Aparecida',
  new Date('1958-12-12'),
  3.800,
  fil
);

cleide.salary = 10.000;
// console.log(cleide);
const today = new Date();
today.setDate(today.getDate() + 1) // data do dia seguinte
const tomorrow = today;
// cleide.admissionDate = tomorrow;
