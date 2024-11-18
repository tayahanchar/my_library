import { useSelector } from 'react-redux';
import './booksList.css';
import Book from './Book';
import { useDispatch } from 'react-redux';
import { deleteBook} from '../books-reducer/actionCreators';

function BooksList() {
  const booksList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(deleteBook(id));
  }

  return (
    <div className="books-list-section">
      <h2 className='books-list_title'>My books</h2>
      <ul className='books-list'>
        {booksList.map((book, i) => <Book delBook={delBook} key={book.id} index={++i} {...book}  />)}
      </ul>
    </div>
  )
}

export default BooksList;