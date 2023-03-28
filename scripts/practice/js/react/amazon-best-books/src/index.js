import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

function App() {
    return (
        <>
            <BookList />
        </>
    );
}

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
);

const BookList = () => (
    <section className="booklist">
        {books.map((book) => (
            <Book
                {...book}
                key={book.title}
            >
                {book.hasButton ? <Button text="Add to cart" onClick={() => alert('Added: ' + book.title)} /> : null}
            </Book>
        ))}
    </section>
);

const Book = ({ style = { color: '#a9a9a9' }, imageUrl, title, author, children}) => {
    const titlePrefix = 'Title:';

    return (
        <article className="book" style={style}>
            <img alt='' src={imageUrl} />
            <h2>{titlePrefix} {title}</h2>
            {children}  
            <p style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>By {author}</p>
        </article>
    );
};

const books = [
    {
        title: 'Young Forever: The Secrets to Living Your Longest, Healthiest Life',
        author: 'Dr. Mark Hyman MD',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dL13NFc3L._AC_UL600_SR600,400_.jpg',
        hasButton: true
    },
    {
        title: 'Things We Hide from the Light(Knockemout Series, 2)',
        author: 'Lucy Score',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h9CawUxpL._AC_UL600_SR600,400_.jpg',
    },
    {
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        author: 'James Clear',
        imageUrl: './images/atomic-habits.jpg',
        style: { color: 'gray' }
    }
];

ReactDOM.createRoot(document.getElementById('root')).render((
    <App />
));












