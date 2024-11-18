import './App.css'
import BooksList from './components/BooksList'
import Form from './components/Form'

function App() {

  return (
    <>
      <header className='header'>
        <h1>Book library app</h1>
      </header>
      <main className='main'>
        <Form />
        <section className='books-section'>
          <BooksList />
        </section>
      </main>
    </>
  )
}

export default App
