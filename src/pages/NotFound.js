import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        // navigate('/');
        setTimeout(() => {
            navigate(-1);
        }, 1000)
    }, []);
    return (
        <>
            <h2>
                404 Not Found !
            </h2>
            {/*<Navigate to='/'/>*/}
        </>
    );
}

export default NotFound;
