const myLibrary = []
let cards = document.querySelector('.cards');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages"
    }
    this.readBook = function () {
        this.read = true
    }
    this.unreadBook = function () {
        this.read = false
    }
}

function setupText(book, div) {
    let p = document.createElement("p");
    p.innerText = book.info()
    div.appendChild(p)
}

function setupButton(book, div) {
    let button = document.createElement("button")
    button.innerText = "remove";
    button.addEventListener('click', ev => {
        myLibrary.splice(myLibrary.indexOf(book),1)
        cards.removeChild(div)
    })
    div.appendChild(button)
}

function setupRadio(book, div) {
    let radioRead = document.createElement('input')
    let radioNotRead = document.createElement('input')
    let labelRead = document.createElement('label')
    let labelNotRead = document.createElement('label')

    radioRead.setAttribute('type', 'radio')
    radioNotRead.setAttribute('type','radio')
    radioRead.setAttribute('id','radio-read')
    radioNotRead.setAttribute('id', 'radio-not-read')
    radioRead.setAttribute('name','book-read'+book.title.length);
    radioNotRead.setAttribute('name','book-read'+<book className="title length"></book>);

    labelRead.setAttribute('for','radio-read')
    labelNotRead.setAttribute('for','radio-not-read');
    labelRead.innerText = 'Read:';
    labelNotRead.innerText = 'Not read:';

    (book.read) ? radioRead.checked=true: radioNotRead.checked=true
    radioRead.addEventListener('change', ev => book.readBook())
    radioNotRead.addEventListener('change', ev => book.unreadBook())

    div.appendChild(labelRead)
    div.appendChild(radioRead)
    div.appendChild(labelNotRead)
    div.appendChild(radioNotRead)
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    let div = document.createElement("div");
    setupText(book,div)
    setupRadio(book,div)
    setupButton(book,div)
    cards.appendChild(div)
}

addBookToLibrary(new Book("heroes del olimpo","Rick Riordan", 300, true))

const dialog = document.getElementById('book-dialog')
const newBook = document.getElementById('new-book')
const confirmButton = document.getElementById('confirm-button')
const form = document.getElementById('book-form')

newBook.addEventListener("click", ev => dialog.showModal())
confirmButton.addEventListener("click", ev => {
    ev.preventDefault()
    addBookToLibrary(new Book(form.chello.value, form.author.value, form.pages.value, ((form['read'].value) === 'read')))
    dialog.close()
})