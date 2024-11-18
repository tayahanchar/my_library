import './filters.css';

function Filters() {
  return (
    <div className="filters">
      <input type="text" placeholder="filter by title..." />
      <input type="text" placeholder="filter by auther..." />
    </div>
  )
}

export default Filters;