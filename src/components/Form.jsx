import { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../booksReducer';
import { v4 as uuidv4 } from 'uuid';
import randomBooksList from '../books.json';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createBook(title, author) {
  return {
    title,
    author,
    id: uuidv4(),
    isFavorite: false,
  }
}

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addNewBook = (event) => {
    event.preventDefault();

    if(title.trim() && author.trim()) {
      const book = createBook((title, author));
      dispatch(addBook(book));

      setTitle('');
      setAuthor('');
    }
  }

  const addRandomBook = (event) => {
    event.preventDefault();
    const book = randomBooksList[getRandomIntInclusive(0, randomBooksList.length)];

    dispatch(addBook(createBook(book.title, book.author)));
  }


  return (
    <form className='book-form'>
          <h2 className='book-form_title'>Add new book</h2>
          <label htmlFor="title">Title:</label>
          <input value={title} type="text" id='title' name='title' onChange={(event) => setTitle(event.target.value)} />

          <label htmlFor="author">Author:</label>
          <input value={author} type="text" id='author' name='author' onChange={(event) => setAuthor(event.target.value)} />

          <div className='book-form_buttons'>
            <button type='submit' onClick={addNewBook}>Add book</button>
            <button type='submit' onClick={addRandomBook}>Add randome book</button>
          </div>
        </form>
  )
}

export default Form;