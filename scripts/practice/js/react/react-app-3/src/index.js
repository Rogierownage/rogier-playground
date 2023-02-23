import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('p', {}, 'Hello there')
//     );
// }

function Greeting() {
    return (
        <>
            <p>Hello there!</p>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render((
    <Greeting />
));