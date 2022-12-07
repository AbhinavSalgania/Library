// library app

// books objects to be stored in an array

let myLibrary = [];

// Book constructor

function Book (title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

// add book to library
function addBookToLibrary(title, author, read){
    let book = new Book(title, author, read);
    myLibrary.push(book);
}

// function to iterate over myLibrary array and display each book

function displayBooks(){
    let bookList = document.getElementById("bookList");
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("li");
        book.textContent = myLibrary[i].title;
        bookList.appendChild(book);
    }
}

// add 3 random books to library manually for testing

addBookToLibrary("Alice in Wonderland", "Lewis Carroll", "read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "not read");
addBookToLibrary("Game of Thrones", "George R.R. Martin", "read");

// display books on page
displayBooks();






// New Book button that brings up a form to add a new book

function newBook(){
}

// button on each book's display to change its read status

function changeReadStatus(){
}

// button on each book's display to remove the book from the library

function removeBook(){
}


