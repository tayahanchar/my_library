import { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../books-reducer/actionCreators';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addNewBook = (event) => {
    event.preventDefault();

    if(title.trim() && author.trim()) {
      dispatch(addBook({
        title,
        author,
        id: uuidv4(),
      }));

      setTitle('');
      setAuthor('');
    }
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
            <button type='submit'>Add randome book</button>
          </div>
        </form>
  )
}

export default Form;