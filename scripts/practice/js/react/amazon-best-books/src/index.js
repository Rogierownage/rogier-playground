import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

const firstBook = {
    title: 'Young Forever: The Secrets to Living Your Longest, Healthiest Life',
    author: 'Dr. Mark Hyman MD',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dL13NFc3L._AC_UL600_SR600,400_.jpg',
};

function App() {
    return (
        <>
            <BookList />
        </>
    );
}

const BookList = () => (
    <section className="booklist">
        <Book
            title={firstBook.title}
            author={firstBook.author}
            imageUrl={firstBook.imageUrl}
        />
        <Book
            title='Things We Hide from the Light(Knockemout Series, 2)'
            author='Lucy Score'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/71h9CawUxpL._AC_UL600_SR600,400_.jpg'
        />
        <Book 
            title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
            author='James Clear'
            imageUrl='./images/atomic-habits.jpg'
            style={{ color: 'gray' }}
        />
    </section>
);

const Book = (props) => {
    const style = { color: '#a9a9a9' };
    const titlePrefix = 'Title:';

    return (
        <article className="book" style={props.style ?? style}>
            <img alt='' src={props.imageUrl} />
            <h2>{titlePrefix} {props.title}</h2>
            <p style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>By {props.author}</p>
        </article>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render((
    <App />
));












