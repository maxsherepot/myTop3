import React from "react";
import error from "./error-image.png"
import "./error-indicator.css"



const ErrorIndicator = () => {
    return (
        <div className="d-flex flex-column align-items-center mt-4 p-5 ErrorIndicator">
            <div className="text-danger d-flex flex-column align-items-center">
                <h2>It's Error!</h2>
                <span>Something went wrong</span>
                <img src={error} alt="Error"></img>
            </div>
        </div>
    );
};


export default ErrorIndicator;