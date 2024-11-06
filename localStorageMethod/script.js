// LEVEL 1

// Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке.
// Пример строки: 'uncopyrightable'. Ожидаемый результат: 'abceghilnoprtuy'

function alphabet_order(str) {
    // Преобразуем строку в массив букв
    let arr = str.split('');

    // Сортируем массив букв в алфавитном порядке
    arr.sort((a, b) => a.localeCompare(b));

    // Объединяем отсортированные буквы обратно в строку
    return arr.join('');
}

document.writeln(alphabet_order("uncopyrightable"));

// LEVEL 2

// Напишите функцию JavaScript, которая принимает строку в качестве
// параметра и находит самое длинное слово в строке.

function find_longest_word(str) {

    return str.split(' ')
              .reduce((longest, currentWord) => {
                  return currentWord.length > longest.length ? currentWord : longest;
              }, "");
}

document.writeln(find_longest_word('Web Development In Telran'));