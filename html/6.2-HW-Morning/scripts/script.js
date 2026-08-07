/* if else */
let dayOfWeek = 7;
if (dayOfWeek >= 1 && dayOfWeek <= 7 && dayOfWeek % 1 === 0) {
  if (dayOfWeek === 1) {
    console.log("Monday");
  }
  if (dayOfWeek === 2) {
    console.log("Thuesday");
  }
  if (dayOfWeek === 3) {
    console.log("Wednesday");
  }
  if (dayOfWeek === 4) {
    console.log("Thirsday");
  }
  if (dayOfWeek === 5) {
    console.log("Friday");
  }
  if (dayOfWeek === 6) {
    console.log("Saturday");
  }
  if (dayOfWeek === 7) {
    console.log("Sunday");
  }
} else {
  console.log("Ошибка");
}

/* Switch */
/* let dayOfWeek = 0;

switch (dayOfWeek) {
  case 1:
    console.log("Это понедельник");
    break;
  case 2:
    console.log("Это вторник");
    break;
  case 3:
    console.log("Это среда");
    break;
  case 4:
    console.log("Это четверг");
    break;
  case 5:
    console.log("Это пятница");
    break;
  case 6:
    console.log("Это суббота");
    break;
  case 7:
    console.log("Это воскресенье");
    break;
  default:
    console.log("Неизвестный день! Введите целое число от 1 до 7");
} */

/* Массив */
/* let dayOfWeek = 7;
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (dayOfWeek >= 1 && dayOfWeek <= 7 && dayOfWeek % 1 === 0) {
  console.log(days[dayOfWeek - 1]);
} else {
  console.log("Ошибка");
}
  */
