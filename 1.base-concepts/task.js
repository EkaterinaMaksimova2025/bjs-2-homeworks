"use strict";

function solveEquation(a, b, c) {
  //объявили пустой массив arr
  let arr = [];

  // в константе -формулу дискриминанта

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  }

  if (discriminant === 0) {
    const root = -b / (2 * a); //Формула для вычисления корня
    arr.push(root);
    return arr;
  }

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

//задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  //contribution вклад первоначальный взнос
  //amount сумма

  // Преобразование аргументов в число с плавающей точкой (десятичную дробь)
  const percents = parseFloat(percent);
  const contributions = parseFloat(contribution);
  const fullAmount = parseFloat(amount);
  const months = parseFloat(countMonths);

  if (
    isNaN(percents) ||
    isNaN(contributions) ||
    isNaN(fullAmount) ||
    isNaN(months)
  ) {
    return false;
  }

  //месячная_ставка_в_долях monthly interest rate =(1+percemt/100) в 1/12 степени - 1
  //const monthlyInterestRate =  (Math.pow(1 + percent/100), (1/12)) - 1;

  const monthlyInterestRate = percents / 1200;

  //Посчитайте тело кредита — loan principal
  // сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
  const loanPrincipal = fullAmount - contributions;

  const raisingPower = Math.pow(1 + monthlyInterestRate, months) - 1;
  const monthPayment =
    loanPrincipal * (monthlyInterestRate + monthlyInterestRate / raisingPower);

  //Ежемесячная оплата рассчитывается по формуле:  Monthly payment
  // Платёж = S * (P + (P /   (((1 + P)^n) - 1))),
  // где: S — тело кредита,
  // P — 1/12 процентной ставки (от 0 до 1),
  // n — количество месяцев, ^ — возведение в степень. raisingPower
  // Для возведения в степень используйте оператор — ** или функцию Math.pow.

  const totalAmount = monthPayment * months;

  //округляем всю сумму кредита до двух знаков после запятой
  return Math.round(totalAmount * 100) / 100;
}
// Для наведения красоты в коде использовала расширение Prettier - Code formatter
// т.к. https://codebeautify.org/jsviewer у меня не открывается