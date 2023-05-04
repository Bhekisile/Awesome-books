const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');
let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// the constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// Function to add a new book
function addBook(title, author) {
  let newBook = new Book(title, author);
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  // displayBooks();
}

// Add an event listener to the "Add" button
addBtn.addEventListener('click', () => {
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;

  addBook(title, author);

  // Clear the input fields
  titleInput.value = '';
  authorInput.value = '';
});

// Function to remove a book
function removeBook(book) {
  bookCollection.filter((b) => b !== book);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

// Function to display all books in the collection
function displayBooks() {
  container.innerHTML = '';
  bookCollection.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.innerHTML = `<p>${book.title} by ${book.author}</p>
                        <button class="remove">Remove</button>`;
    container.appendChild(newBook);

    // Adding event listener to the "Remove" button
    const removeBtn = newBook.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      console.log('removed');
      removeBook(book);
      newBook.remove();
    });
  });
}
displayBooks();

const links = document.querySelectorAll('.links'); /// create array of element objects

        links.forEach(link => { // lopp through them
            link.addEventListener('click', function handleClick(event) {
             

                var list = document.getElementById('books-list'); 
                var form = document.getElementById('add-book');
                var contact = document.getElementById('contact-cont'); 

                if(this.id==="linkList"){
                  list.style.display = 'block';
                } else {
                  list.style.display = 'none';
                }
                if(this.id==="linkAdd"){
                  form.style.display = 'block';
                } else {
                  form.style.display = 'none';
                }
                if(this.id==="linkCont"){
                  contact.style.display = 'block';
                } else {
                  contact.style.display = 'none';
                }

              });
            });

                    
