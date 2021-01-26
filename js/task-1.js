/* Посчитать и вывести в консоль количество категорий в ul#categories, то есть элементов li.item. Результат: 'В списке 3 категории.'.*/

const categoriesCount = document.querySelectorAll('.item');
console.log(`В списке ${categoriesCount.length} категории.`);

/*Для каждого элемента li.item в списке ul#categories, найти и вывести в консоль текст заголовка элемента(тега h2)
и количество элементов в категории (всех вложенных в него элементов li).
К примеру, результат для первой категории: 
Категория: Животные
Количество элементов: 4 */

categoriesCount.forEach(category => {
    console.log(`Категория: ${category.querySelector('h2').textContent} 
Количество элементов: ${category.querySelectorAll('li').length}`);
});

