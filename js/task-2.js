/* Написать скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов использовать document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liRef = ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    return itemRef;
});

const listRef = document.querySelector('ul#ingredients');
listRef.append(...liRef);
console.log(listRef);
