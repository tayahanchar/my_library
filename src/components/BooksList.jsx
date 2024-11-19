import { useSelector } from 'react-redux';
import './booksList.css';
import Book from './Book';
import { useDispatch } from 'react-redux';
import { deleteBook, addToFavorites} from '../books-reducer/actionCreators';
import {selectTitle, selectAuthor, selectFavorites} from '../filterReducer';

function BooksList() {
  const booksList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);
  const isChecked = useSelector(selectFavorites);

  const delBook = (id) => {
    dispatch(deleteBook(id));
  }

  const addToFavoritesBook = (id) => {
    dispatch(addToFavorites(id));
  }

  let filteredBook = booksList;

  if(titleFilter.length) {
    filteredBook = filteredBook.filter((book) => book.title.toLowerCase().includes(titleFilter.toLowerCase().trim()));
  }

  if(authorFilter.length) {
    filteredBook = filteredBook.filter((book) => book.author.toLowerCase().includes(authorFilter.toLowerCase()));
  }

  if(isChecked) {
    filteredBook = filteredBook.filter((book) => book.isFavorite);
  }

  return (
    <div className="books-list-section">
      <h2 className='books-list_title'>My books</h2>
      { booksList.length ?
      <ul className='books-list'>
        {filteredBook.map((book, i) => <Book delBook={delBook} addToFavoritesBook={addToFavoritesBook} key={book.id} index={++i} {...book}  />)}
      </ul> :
      <div style={{textAlign: 'center'}}>There is no books</div>
      }
    </div>
  )
}

export default BooksList;