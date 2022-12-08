// library app

// books objects to be stored in an array
let myLibrary = [];

// Book constructor
function Book (title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

// add book to library array
function addBookToLibrary(title, author, read){
    let book = new Book(title, author, read);
    myLibrary.push(book);
}

// add event listener to add book button
let submit = document.getElementById("addBook");
submit.addEventListener("click", function(event){
    event.preventDefault();
    addBook();
});

// function to add book to library array
function addBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read = document.getElementById("read").checked;
    if (read === true) read = "yes";
    else read = "no";
    addBookToLibrary(title, author, read);
    displayBooks();
}

//function to display books and works with addBook function
// to display books after adding a new book
// also works with deleteBook function to display books after deleting a book
// also works with changeReadStatus function to display books after changing read status
function displayBooks(){
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
        <div class="bookTitle">${myLibrary[i].title}</div>
        <div class="bookAuthor">${myLibrary[i].author}</div>
        <div class="bookRead">${myLibrary[i].read}</div>
        <button class="deleteBook">Delete</button>
        <button class="changeReadStatus">Change Read Status</button>
        `;
        bookList.appendChild(book);
    }
}

// add event listener to delete book button
let deleteBook = document.getElementById("bookList");
deleteBook.addEventListener("click", function(event){
    event.preventDefault();
    if (event.target.classList.contains("deleteBook")){
        let book = event.target.parentElement;
        book.remove();
        deleteBookFromLibrary(book);
    }
});

// function to delete book from library array
function deleteBookFromLibrary(book){
    let title = book.querySelector(".bookTitle").textContent;
    let author = book.querySelector(".bookAuthor").textContent;
    let read = book.querySelector(".bookRead").textContent;
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title === title && myLibrary[i].author === author && myLibrary[i].read === read){
            myLibrary.splice(i, 1);
        }
    }
    displayBooks();
}


// add event listener to change read status button
let changeReadStatus = document.getElementById("bookList");
changeReadStatus.addEventListener("click", function(event){
    event.preventDefault();
    if (event.target.classList.contains("changeReadStatus")){
        let book = event.target.parentElement;
        changeReadStatusOfBook(book);
    }
});

// function to change read status of book
function changeReadStatusOfBook(book){
    let title = book.querySelector(".bookTitle").textContent;
    let author = book.querySelector(".bookAuthor").textContent;
    let read = book.querySelector(".bookRead").textContent;
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title === title && myLibrary[i].author === author && myLibrary[i].read === read){
            if (myLibrary[i].read === "yes") myLibrary[i].read = "no";
            else myLibrary[i].read = "yes";
        }
    }
    displayBooks();
}


// sample books to be added to library array 
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", "yes");
let book2 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", "no");
let book3 = new Book("Game of Thrones", "George R.R. Martin", "yes");

// add sample books to library array
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// display books on page load
displayBooks();