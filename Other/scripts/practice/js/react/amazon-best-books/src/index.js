import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import BookList from './components/BookList';

function App() {
    return (
        <>
            <BookList />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render((
    <App />
));












