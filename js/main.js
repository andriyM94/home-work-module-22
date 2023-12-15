// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
console.log("Якщо змінна більше нуля - виведіть true, менше - false. 1, 0, -3");
console.log("1", 1 > 0 ? true : false);
console.log("0", 0 > 0 ? true : false);
console.log("-3", -3 > 0 ? true : false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
console.log('Якщо змінна = "test" - виведіть true. \'test\', "qwerty", true');
console.log("'test'", "test" === "test" ? true : false);
console.log('"qwerty"', "qwerty" === "test" ? true : false);
console.log("true", true === "test" ? true : false);

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

console.log(
  "Якщо змінна більше 10 - відніміть 5, менше - додайте 5, результат виведіть в консоль. 1, 10, 13"
);

let a = 1;
let b = 10;
let c = 13;

let result;

if (a > 10) {
  result = a - 5;
} else {
  result = a + 5;
}

console.log(a, `result - ${result}`);

if (b > 10) {
  result = b - 5;
} else {
  result = b + 5;
}

console.log(b, `result - ${result}`);

if (c > 10) {
  result = c - 5;
} else {
  result = c + 5;
}

console.log(c, `result - ${result}`);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let number = Number.parseInt(prompt("Введіть число від 1 до 12"));
let month = null;

switch (number) {
  case 1:
    month = "Січень";
    break;
  case 2:
    month = "Лютий";
    break;
  case 3:
    month = "Березень";
    break;
  case 4:
    month = "Квітень";
    break;
  case 5:
    month = "Травень";
    break;
  case 6:
    month = "Червень";
    break;
  case 7:
    month = "Липень";
    break;
  case 8:
    month = "Серпень";
    break;
  case 9:
    month = "Вересень";
    break;
  case 10:
    month = "Жовтень";
    break;
  case 11:
    month = "Листопад";
    break;
  case 12:
    month = "Грудень";
    break;
  default:
    alert("Ви ввели число яке не потрапляє в діапазон від 1 до 12.");
    break;
}

if (month !== null) {
  alert(month);
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

let num = Number.parseInt(prompt("Введіть тризнaчне число"));
let sum = null;

if (num < 100 || num > 999) {
  alert("Ви ввели число яке не потрапляє в діапазон від 100 до 999.");
} else {
  let firstNumber;
  let secondNumber;
  let thirNumber;

  firstNumber = Math.floor(num / 100);
  secondNumber = Math.floor((num % 100) / 10);
  thirNumber = (num % 100) % 10;

  sum = firstNumber + secondNumber + thirNumber;

  alert(
    `Сума цифр числа ${num}:\n${firstNumber} + ${secondNumber} + ${thirNumber} = ${sum}.`
  );
}
