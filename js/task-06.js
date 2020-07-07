"use strict";

let input;
let total = 0;

while (true) {
  input = prompt("Введите число!");

  if (input === null) {
    console.log("Отменено пользователем");
    break;
  }
  input = Number(input);
  const dontNumber = Number.isNaN(input);

  if (dontNumber) {
    console.log("Было введено не число, попробуйте еще раз.");
    continue;
  }
  total += input;
}
alert("Общая сумма чисел равна ${total}");
