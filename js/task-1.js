/* Посчитать и вывести в консоль количество категорий в ul#categories, то есть элементов li.item. Результат: 'В списке 3 категории.'.*/

const listsRef = document.querySelectorAll('.item');
console.log(`В списке ${listsRef.length} категории.`);

/*Для каждого элемента li.item в списке ul#categories, найти и вывести в консоль текст заголовка элемента(тега h2)
и количество элементов в категории (всех вложенных в него элементов li).
К примеру, результат для первой категории: 
Категория: Животные
Количество элементов: 4 */

listsRef.forEach(list => {
    console.log(`Категория: ${list.querySelector('h2').textContent} 
Количество элементов: ${list.querySelectorAll('li').length}`);
});

