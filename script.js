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

// function to iterate over myLibrary array and display each book

function displayBooks(){
    let bookList = document.getElementById("bookList");
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("li");
        book.textContent = myLibrary[i].title;
        bookList.appendChild(book);
    }
}

// function to add book to library array and display it
function addBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read = document.getElementById("read").value;
    addBookToLibrary(title, author, read);
    displayBooks();

}

// add event listener to add book button
let submit = document.getElementById("addBook");
submit.addEventListener("click", function(event){
    event.preventDefault();
    addBook();
});

