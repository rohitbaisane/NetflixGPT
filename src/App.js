import React from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    return (
        <div className="border-black border-4">
            This is my app
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<App></App>);