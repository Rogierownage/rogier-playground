import Book from './Book';
import Button from './Button';
import books from '../data/books';

const BookList = () => {
    const getBook = (id) => {
        return books.find((book) => book.id === id);
    };

    return (
        <section className="booklist">
            {books.map((book, index) => (
                <Book
                    {...book}
                    key={book.title}
                    getBook={getBook}
                    sequence={index + 1}
                >
                    {book.hasButton ? (
                        <div>
                            <Button text="Add to cart" onClick={() => alert('Added: ' + book.title)} />
                            <form onSubmit={(e) => {
                                e.preventDefault();

                                alert('submit');
                            }}>
                                <input onChange={(e) => console.log([e.target.name, e.target.value])} type="text" name="title"></input>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    ) : null}
                </Book>
            ))}
        </section>
    )
};

export default BookList