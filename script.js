alert("Привет, я бот!");
let str = "";
let phrasesJS = [
  "В JavaScript есть много методов для работы со строкой",
  "Массивы в JavaScript похожи на объекты",
];
let phrasesPHP = [
  "PHP - это распространённый язык программирования общего назначения с открытым исходным кодом",
  "PHP отличается от JavaScript тем, что PHP-скрипты выполняются на сервере и генерируют HTML, который посылается клиенту",
];
let phrasesHTML = [
  "HTML - самый базовый строительный блок Веба",
  "Другие технологии, помимо HTML, обычно используются для описания внешнего вида/представления (CSS) или функциональности/поведения (JavaScript) веб-страницы",
];
while (str.toLowerCase() != "пока") {
  str = prompt(
    "Напишите что-то боту, Если хотите закончить беседу, то напишите 'Пока'"
  );
  let checkline = str.toLowerCase();
  if (checkline.indexOf("привет") > -1 || checkline.indexOf("здравствуй") > -1)
    alert("Здравствуйте)");
  else if (checkline.indexOf("пока") == -1) {
    if (checkline.indexOf("javascript") > -1)
      alert(phrasesJS[Math.floor(Math.random() * phrasesJS.length)]);
    else if (checkline.indexOf("php") > -1)
      alert(phrasesPHP[Math.floor(Math.random() * phrasesPHP.length)]);
    else if (checkline.indexOf("html") > -1)
      alert(phrasesHTML[Math.floor(Math.random() * phrasesHTML.length)]);
    else alert("Я хочу побеседовать о языках программирования!");
  }
}
alert("До свидания, рад был пообщаться!");
