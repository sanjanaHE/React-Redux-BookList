import {combineReaducers} from "redux";
import BooksReaducer from "./reducer_books";

const rootReaducer = combineReaducers({
    books:BooksReaducer
});

export default rootReaducer;