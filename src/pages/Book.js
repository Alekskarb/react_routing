import {useParams} from "react-router-dom";

function Book() {
    // const params = useParams();
    const {id} = useParams();
    console.log('params: ', id)
    return (
        <>
            <h2>
            Book {id}
            </h2>
        </>
    );
}

export default Book;
