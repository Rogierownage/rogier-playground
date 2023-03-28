const Book = ({ style = { color: '#a9a9a9' }, imageUrl, title, author, id, getBook, children }) => {
    const titlePrefix = 'Title:';

    return (
        <article className="book" style={style}>
            <img alt='' src={imageUrl} />
            <h2>{titlePrefix} {title}</h2>
            {children}
            <p style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>By {author}</p>
            <button onClick={() => console.log(getBook(id).title)}>Find book</button>
        </article>
    );
};

export default Book;