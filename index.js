// Задание 1.
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books;
  constructor(theListOfBook = []) {
    if (new Set(theListOfBook).size !== theListOfBook.length) {
      // объект Set проверяет на уникальность
      throw new Error("Список содержит дубликаты");
    }
    this.#books = theListOfBook;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Такая книга уже существует");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Такой книги нет в списке");
    }
    this.#books.forEach((book, index) => {
      if (book === title) {
        this.#books.splice(index, 1); // удаление книги
      }
    });
  }

  hasBook(title) {
    console.log(this.#books.includes(title));
  }
}

const newBook = new Library(["Мертвые души", "Война и Мир"]);
console.log(newBook.allBooks);
// newBook.addBook("Мертвые души");
newBook.addBook("Белые лебеди");
console.log(newBook.allBooks);
newBook.removeBook("Мертвые души");
console.log(newBook.allBooks);
newBook.hasBook("Война и Мир");
newBook.hasBook("Война");
newBook.removeBook("Белые лебеди");
console.log(newBook.allBooks);

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".btn");
const divEL = document.querySelector(".container");

inputEl.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // код клавиши Enter
      buttonEl.click();
  }
});

buttonEl.addEventListener("click", function () {
  try {
    if (inputEl.value.length < 50 || inputEl.value.length > 500) {
      console.log("Error");
    } else {
      const divElOt = document.createElement("div");
      divEL.appendChild(divElOt);
      divElOt.textContent = inputEl.value;
    }
  } catch (error) {
    console.log("Error");
  }
});


