import './App.css';
import {Link, NavLink, Route, Routes, useLocation, useRoutes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BooksLayout from "./layout/BooksLayout";
import {BookRoutes} from "./BookRoutes";

function App() {
    const location = useLocation();
    console.log('location: ', location)
    // const elements = useRoutes([
    //     {
    //         path: '/', element: <Home/>
    //     },
    //     {
    //         path: '/books', element: <BooksLayout/>,
    //         children: [
    //             {
    //                 index: true,
    //                 element: <BookList/>
    //             },
    //             {
    //                 path: ':id', element: <Book/>
    //             }
    //         ]
    //     }
    // ])

    return (
        <>
            <ul>
                <li><NavLink style={({isActive}) => {
                    return isActive ? {color: 'red'} : {}
                }}
                  state='PasData'           to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'red' : null}
                //     style={({isActive}) => {
                //     return isActive ? {color: 'red'} : {}
                // }}
                    to='/about'>About</NavLink></li>
                {/*<li><NavLink className={({isActive}) => isActive ? 'red' : null} end*/}
                <li><NavLink className={({isActive}) => isActive ? 'red' : null}
                    to='/books'>{({isActive}) => isActive ? 'BookList Active' : 'BookList '}</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            {/*{elements}*/}
            {location.state}

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/books/*' element={<BookRoutes/>}/>
                {/*<Route path='/books' element={<BookList/>}>*/}
                {/*<Route path='/books/:id/:img?' element={<Book/>}/>*/}
                {/*<Route path='/books/new' element={<NewBook/>}/>*/}
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
        ;
}

export default App;
