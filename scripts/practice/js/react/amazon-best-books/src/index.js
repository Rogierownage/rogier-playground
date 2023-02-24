import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css';

function App() {
    return (
        <>
            <BookList />
        </>
    );
}

const BookList = () => (
    <section>
        <Book
            title='Young Forever: The Secrets to Living Your Longest, Healthiest Life'
            author='Dr. Mark Hyman MD'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/81dL13NFc3L._AC_UL600_SR600,400_.jpg'
        />
        <Book
            title='Things We Hide from the Light(Knockemout Series, 2)'
            author='Lucy Score'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/71h9CawUxpL._AC_UL600_SR600,400_.jpg'
        />
        <Book 
            title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
            author='James Clear'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg'
        />
    </section>
);

const Book = (props) => (
    <article>
        <Image url={props.imageUrl}/>
        <Title title={props.title}/>
        <Author name={props.author}/>
    </article>
)

const Image = (props) => (
    <img alt='' src={props.url}/>
);

const Title = (props) => (
    <h2>{props.title}</h2>
);

const Author = (props) => (
    <p>By {props.name}</p>
);

ReactDOM.createRoot(document.getElementById('root')).render((
    <App />
));












