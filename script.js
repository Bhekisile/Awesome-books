const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');

let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
    const newBook = new Book(title, author);
    bookCollection.push(newBook);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }

  static removeBook(book) {
    bookCollection = bookCollection.filter((b) => b !== book);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }
}

const displayBooks = (container) => {
  container.innerHTML = '';
  bookCollection.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.innerHTML = `<p>${book.title} by ${book.author}</p>
                          <button class="remove">Remove</button>`;
    container.appendChild(newBook);

    const removeBtn = newBook.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      Book.removeBook(book);
      newBook.remove();
    });
  });
};

displayBooks(container);

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;

  if (title === '' && author === '') {
    return;
  }
  Book.addBook(title, author);
  displayBooks(container);

  titleInput.value = '';
  authorInput.value = '';
});

// const dates = document.querySelectorAll('.date');
// dates.forEach((date) => {
//   const today = new Date();
//   const time = today.toLocaleTimeString();
//   const day = today.toLocaleDateString('en-us', {
//     year: 'numeric', month: 'long', day: 'numeric',
//   });
//   date.textContent = `${day} ${time}`;
// });

const links = document.querySelectorAll('.links'); /// create array of element objects
links.forEach((link) => { // loop through them
  link.addEventListener('click', function handleClick() {
    const list = document.getElementById('books-list');
    const form = document.getElementById('add-book');
    const contact = document.getElementById('contact-cont');

    if (this.id === 'linkList') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
    if (this.id === 'linkAdd') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
    if (this.id === 'linkCont') {
      contact.style.display = 'block';
    } else {
      contact.style.display = 'none';
    }
  });
});