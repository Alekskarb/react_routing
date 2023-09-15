import {Link} from "react-router-dom";

function BookList() {
    return (
        <>
            <h2>
                BookList
            </h2>
            <ul>
                <li><Link to='/books/1'>link 1</Link></li>
                <li><Link to='/books/2'>link 2</Link></li>
                <li><Link to='/books/new'>New Book</Link>
                </li>
            </ul>
        </>
    );
}

export default BookList;
