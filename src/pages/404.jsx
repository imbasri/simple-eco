import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="text-center flex flex-col animate-pulse justify-center items-center h-screen">
            <h1 className="text-3xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>{error.status || error.message}</p>
        </div>
    );
};

export default ErrorPage;
