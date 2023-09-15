import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BooksLayout from "./layout/BooksLayout";

function App() {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/books'>Book List</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/books' element={<BooksLayout/>} >
                    <Route index element={<BookList/>}/>
                    <Route path=':id' element={<Book/>}/>
                    <Route path='new' element={<NewBook/>}/>
                </Route>
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
