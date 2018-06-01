import React from 'react';
import { connect } from 'react-redux';
import selectBook from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends React.Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={()=>this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whenver selectBook is called result should be passed to all of reducers
    return{
        books:state.books
    };
}

//Anything returned from this function will end up as props on BookList Container
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook : selectBook},dispatch)
}

//promote BookList from a component to a container needs to knw new dispatch mtd selectBook.Make ii available as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);  