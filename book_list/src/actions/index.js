export function selectBook(book){
    console.log("A book has been selected:",book.title);
    //needsd to return a Action , object with a type property
    return{
        type:"BOOK_SELECTED",
        payload:book
    };
}