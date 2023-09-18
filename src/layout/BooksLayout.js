import {Link, Outlet, useSearchParams} from "react-router-dom";
import {useState} from "react";

function BooksLayout() {
    // const [number, setNumber] = useState(3);
    const [searchParams, setParams] = useSearchParams({num: 3});
    console.log('params: ', searchParams.get('num'))
    const params = searchParams.get('num');

    return (
        <>
            <ul>
                <li><Link to='/books/1'>link 1</Link></li>
                <li><Link to='/books/2'>link 2</Link></li>
                <li><Link to={`/books/${searchParams}`}>link {params}</Link></li>
                <li><Link to='/books/new'>New Book</Link></li>
            </ul>
            <Outlet context={{name: 'Alex'}}/>
            <input type="number" value={params} onChange={(e)=> {setParams({num: e.target.value})}}/>
        </>
    );
}

export default BooksLayout;
