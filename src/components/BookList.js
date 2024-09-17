import React,{useState} from 'react'
import BookShow from './BookShow'
 
const BookList = ({books,onDelete,onEdit}) => {
    const rendernBooks=books.map((book)=>{
        return(
            <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
        )
    })
  return (
    <div className='book-list'>
      {rendernBooks}
    </div>
  )
}
 

export default BookList