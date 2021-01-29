/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создать переменную counterValue, в которой будет храниться текущее значение счетчика.
Создать функции increment и decrement для увеличения и уменьшения значения счетчика.
Добавить слушатели кликов на кнопки, вызовы функций и обновление интерфейса. */

let counterValue = 0;
const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');


incrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});

decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});


