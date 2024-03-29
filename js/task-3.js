/* Написать скрипт для создания галереи изображений по массиву данных.
Использовать массив объектов images для создания тегов img, вложенных в li. 
Для создания разметки использовать шаблонные строки и insertAdjacentHTML().
Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавить минимальное оформление галереи флексбоксами или гридами через css-классы. */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('ul#gallery');
listRef.classList.add('photo-collection', 'list');

const itemsRef = images.map(image => listRef.insertAdjacentHTML('beforeEnd', `<li><img src='${image.url}' alt='${image.alt}' width=200px></li>`));

