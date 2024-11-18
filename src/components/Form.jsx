import './form.css';

function Form() {
  return (
    <form className='book-form'>
          <h2 className='book-form_title'>Add new book</h2>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' name='title' />

          <label htmlFor="author">Author:</label>
          <input type="text" id='author' name='author' />

          <div className='book-form_buttons'>
            <button type='submit'>Add book</button>
            <button type='submit'>Add randome book</button>
          </div>
        </form>
  )
}

export default Form;