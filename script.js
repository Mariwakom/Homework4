// Задание 1
for (let i = 1; i <=2; i++) {
  console.log("Привет");
}

//Задание 2
for (let h = 1; h <=5; h++) {
  console.log(h);
}

//Задание 3
for ( let k = 7; k <= 22; k++) {
console.log(k)};

//Задание 4
let obj = {
   "Коля": 200,
   "Вася": 300,
   "Петя": 400,
}
for (let key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

//Задание 5
for (let n = 1000, num = 0; n >= 50; num++, n /=2 ) {
  console.log(n);
  console.log(`Количество итераций - ${num}`);
}

//Задание 6
for (let firstFriday = 3; firstFriday <= 31; firstFriday += 7) {
  console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
}
