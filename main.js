
const myLibrary = [];



function Book(title, author, pages, completion){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completion = completion;
}

const book1 = new Book('Solo Leveling', "an author", "some pages", "completed");

function render(){ /** This is adding the newly inputed books from the user unto the page**/
    let libraryEl = document.querySelector("#library"); /** The newly variable is selecting the newest created library id**/
    libraryEl.innerHTML = ""; /** The variable libraryel (library element) will get emptied once a new one is made. to stop the duplication from happening. **/
    for (let i = 0; i  < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div"); /** This is creating a div for the given inputed 
        data to be placed into**/
        bookEl.setAttribute("class", "card-example") /** For style purposes, to choose what class I want the chosen element (class in this class) to be like**/

        bookEl.innerHTML = /** Below will show the classes that are being targetted on CSS for the style, and then displaying them in the newly library for the div**/
                            `
                            <div class="card-header">
                            <h3 class="title">${book.title}</h3> 
                            <h5 class="author"> ${book.author}</h5>
                            </div>
                            <div class = "card-body">
                            <p>${book.pages}pages</p>
                            <p class="read-status">${book.completion ? "Read" : "Not Read Yet"} </p> 
                            <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                            </div>
                            <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle Read</button>
                            `;
        libraryEl.appendChild(bookEl);
    }
}

/** Removing a book from the library**/


function removeBook(index){ /** this is targetting the selected array index, and splicing it out. The one is saying that it is only cutting out that one **/
    myLibrary.splice(index, 1);
    render();
}



/** Using a prototype to toggle read status **/

/** Prototype type is done so that every book that is created will have the option of having it's button toggled **/
Book.prototype.toggleRead = function(){
    this.completion = !this.completion; //meaning, if it is read and clicked, it will become not read, and vice versa
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary(){
    //do stuff here
    let title = document.querySelector("#title").value; /** Creatinng a variable that is selecting the title ID value that is given by the user**/
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let completion = document.querySelector("#completed").value;

    let newBook = new Book(title, author, pages, completion) /** This will create the new book object that will be inputed by the user **/
    myLibrary.push(newBook);
    render();
}



let newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", function(){ /** When the *new book* button is clicked, will show the form to be filled out **/
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){ /** This is sleecting the new-book-form id, and it has an event listener for the submit button under the button. Once it is clicked, it will do the following **/
    event.preventDefault(); /** Because I'm using submit, within the reading it talks about if an event isn't explicitly handled, that it's default action shouldnt happen. Within this, the submit function is not handled in short.  **/
    addBookToLibrary();
})


//So I need to make a library, in order to do this the steps are as follows

//just display, no need to make it continous just yet

//create a table to store all the books into

//////