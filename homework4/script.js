const student = "Воронов Роман Олегович"; 

document.getElementById("student").innerHTML = student;

function getRandomInclusive(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function throwRandomError(errorRate) {
   if (getRandomInclusive(0,100) <= errorRate) {
    throw new Error("ОЙ, что-то сломалось");
   }
}

let errorRate = +prompt("Введите вероятность выпада ошибки в процентах", 20)

try {

  throwRandomError(errorRate);

  alert("Всё в порядке, приложение работает в штатном режиме");

} catch (err) {

  alert("Произошла ошибка, пожалуйста перезагрузите страницу");

  alert(err);
  
}