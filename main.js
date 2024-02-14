
const myLibrary = [];



function book(title, author, pages, completion){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completion = completion;
}

const book1 = new book('Solo Leveling', "an author", "some pages", "completed");

console.log(book1)

function addBookToLibrary(){
    //do stuff here
}


//So I need to make a library, in order to do this the steps are as follows

//just display, no need to make it continous just yet

//create a table to store all the books into

//////