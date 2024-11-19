import './filters.css';
import { useDispatch, useSelector } from 'react-redux';
import {setTitleFilter, setAuthorFilter, resetFilters, setOnlyFavoritesFilter} from '../filterReducer';
import {selectTitle, selectAuthor, selectFavorites} from '../filterReducer';

function Filters() {
  const dispatch = useDispatch();
  const titleValue = useSelector(selectTitle);
  const authorValue = useSelector(selectAuthor);
  const isChecked = useSelector(selectFavorites);

  const useTitleFilter = (event) => {
    dispatch(setTitleFilter(event.target.value));
  }

  const useAuthorFilter = (event) => {
    dispatch(setAuthorFilter(event.target.value));
  }

  const resetAllFilters = () => {
    dispatch(resetFilters());
  }

  const toggleFavorites = () => {
    dispatch(setOnlyFavoritesFilter())
  }

  return (
    <div className="filters">
      <input value={titleValue} onChange={useTitleFilter} type="text" name='title' placeholder="filter by title..." />
      <input value={authorValue} onChange={useAuthorFilter} type="text" name='author' placeholder="filter by auther..." />
      <button onClick={resetAllFilters}>reset</button>
      <div>
        <input id='fav' onChange={toggleFavorites} type="checkbox" checked={isChecked} />
        <label className='fav-label' htmlFor="fav">Only favorites</label>
      </div>
    </div>
  )
}

export default Filters;