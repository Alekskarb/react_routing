import {useOutletContext, useParams} from "react-router-dom";

function Book() {
    // const params = useParams();
    const {id} = useParams();
    const context = useOutletContext();
    console.log('params: ', id)
    console.log('context: ', context)
    return (
        <>
            <h2>
            {/*Book {id}*/}
            Book {id} {context.name}
            </h2>
        </>
    );
}

export default Book;
