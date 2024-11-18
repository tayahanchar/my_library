import { useSelector } from 'react-redux';
import './booksList.css';

function BooksList() {

  const booksList = useSelector((state) => state.booksReducer)

  return (
    <div className="books-list-section">
      <h2 className='books-list_title'>My books</h2>
      <ul className='books-list'>
        {booksList.map((book, i) => <li key={book.id} className='books-list_item'>{++i}. <span style={{fontWeight:700}}>{book.title}</span> - {book.author}</li>)}
      </ul>
    </div>
  )
}

export default BooksList;