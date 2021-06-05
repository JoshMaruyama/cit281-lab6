class Book {
    constructor(titleOfBook, authorOfBook, pubDateOfBook, isbn){
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.pubDate = pubDateOfBook;
        this.isbn = isbn;
    }
}

class Library {
    constructor(name){
        this._name = name;
        this._books = [];
    }
    get books(){
        return JSON.parse(JSON.stringify(this._books));
    }
    get count(){
        return this._books.length;
    }
    addBook(book = {}){
        const {title = "", author = "", pubDate = "", isbn = ""} = book;
        if (title.length > 0 && author.length > 0){
            const newBook = {title, author, pubDate, isbn};
        }
    }
    deleteBook(isbn){
        let indexOfBookToRemove = null;
        for (let index = 0; index < this._books.length; index++){
            const book = this._books[index];
            if (book.isbn == isbn){
                indexOfBookToRemove = index;
                break;
            }
        }
        this._books.splice(indexOfBookToRemove, 1);
    }
    listBooks(){
        for (const book of this._books){
            const {title, author, pubDate, isbn} = book;
            console.log(`Title: ${title}, Author: ${author}, pubDate: ${pubDate}, ISBN: ${isbn}`)
        }
    }
}

const myBook = new Book("AP Stats", "Bob Jefferson", "10/25/1995", "2385674058");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
let uoLibrary = new Library("knight library");
console.log("adding books");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.listBooks();
console.log("deleting books");
uoLibrary.deleteBook("2385674058")
uoLibrary.listBooks();