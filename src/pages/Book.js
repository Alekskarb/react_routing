import {useParams} from "react-router-dom";

function Book() {
    const params = useParams();
    console.log('params: ', params)
    return (
        <>
            <h2>
            Book
            </h2>
        </>
    );
}

export default Book;
