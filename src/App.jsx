import './App.css';
import BooksList from './components/BooksList';
import Filters from './components/Filters';
import Form from './components/Form';
import { store } from './store';
import { Provider } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <header className='header'>
        <h1>Book library app</h1>
      </header>
      <main className='main'>
        <Form />
        <section className='books-section'>
          <Filters />
          <BooksList />
        </section>
      </main>
    </Provider>
  )
}

export default App;
