import { useRouteError } from "react-router-dom";

const ErrorComponent = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Oops!...</h1>
            <p>{err.status}</p>
            <p>{err.statusText}</p>
        </div>
    )
}

export default ErrorComponent