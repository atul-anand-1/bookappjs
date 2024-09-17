import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
 
const BookApp = () => {
    const [books, setBooks] = useState([]);
 
    const editBookById = (id, newTitle) => {
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...books, title: newTitle };
            }
            return book;
        });
        setBooks(updateBooks);
    }
 
    const deleteBookById = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updateBooks);
    }
 
    const createBook = (title) => {
        const updateBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title,
            }
        ];
        setBooks(updateBooks);
    }
    return (
        <div>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}
 
export default BookApp