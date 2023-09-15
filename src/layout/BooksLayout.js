import {Link, Outlet} from "react-router-dom";

function BooksLayout() {
    return (
        <>
            <ul>
                <li><Link to='/books/1'>link 1</Link></li>
                <li><Link to='/books/2'>link 2</Link></li>
                <li><Link to='/books/new'>New Book</Link></li>
            </ul>
            <Outlet/>
        </>
    );
}

export default BooksLayout;
