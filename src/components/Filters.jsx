import './filters.css';
import { useDispatch, useSelector } from 'react-redux';
import {setTitleFilter, setAuthorFilter, resetFilters} from '../filterReducer';
import {selectTitle, selectAuthor} from '../filterReducer';

function Filters() {
  const dispatch = useDispatch();
  const titleValue = useSelector(selectTitle);
  const authorValue = useSelector(selectAuthor);

  const useTitleFilter = (event) => {
    dispatch(setTitleFilter(event.target.value));
  }

  const useAuthorFilter = (event) => {
    dispatch(setAuthorFilter(event.target.value));
  }

  const resetAllFilters = () => {
    dispatch(resetFilters());
  }

  return (
    <div className="filters">
      <input value={titleValue} onChange={useTitleFilter} type="text" name='title' placeholder="filter by title..." />
      <input value={authorValue} onChange={useAuthorFilter} type="text" name='author' placeholder="filter by auther..." />
      <button onClick={resetAllFilters}>reset</button>
    </div>
  )
}

export default Filters;