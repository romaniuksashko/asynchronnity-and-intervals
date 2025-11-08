// ЗАВДАННЯ 1

// Завдання "Таймер інтервалу": 
// Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. 
// Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let messageCount = 0;

const message = setInterval(() => {
  messageCount += 1;
  alert(`Виведено повідомлення під номером ${messageCount}`);
  if (messageCount >= 5) {
    clearInterval(message);
  }
}, 1000);



// ЗАВДАННЯ 2

// Завдання "Анімація елементів":
// Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір,
// положення чи стилі через певний інтервал за допомогою setInterval.

const startAnimBtn = document.querySelector(".start-anim");
const stopAnimBtn = document.querySelector(".stop-anim");
const squareRef = document.querySelector(".square");
const circleRef = document.querySelector(".circle");

let animInterval;

startAnimBtn.addEventListener("click", () => {
  let sizeCount = 0;

  animInterval = setInterval(() => {
    sizeCount += 0.05;

    squareRef.style.width = `${sizeCount * 10}px`;
    squareRef.style.height = `${sizeCount * 10}px`;
    squareRef.style.transform = `rotate(${sizeCount * 45}deg)`;

    circleRef.style.border = `solid ${sizeCount * 1.1}px red `;
  }, 0);
});

stopAnimBtn.addEventListener("click", () => {
  clearInterval(animInterval);
});



// ЗАВДАННЯ 3

// Завдання "Інтерактивна гра":
// Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом
// певного інтервалу часу, використовуючи setInterval.
// Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const gameStart = document.querySelector(".start-game");

gameStart.addEventListener("click", () => {
  const gameList = document.querySelector("ul");
  const countText = document.querySelector("span");

  let count = 0;
  gameList.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      count += 1;
      countText.textContent = count;
    };
  });

  setTimeout(() => {
    alert(`Гру завершено. Ваш рахунок: ${count}`);
    count = 0;
    countText.textContent = count;
  }, 10000)
});



// ЗАВДАННЯ 4

// Завдання "Контроль часу": 
// Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. 
// Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const inputRef = document.querySelector("#interval");
const confirmRef = document.querySelector(".confirm");

confirmRef.addEventListener("click", () => {
  setInterval(() => {
    alert("Hello world!");
  }, Number(inputRef.value));
});