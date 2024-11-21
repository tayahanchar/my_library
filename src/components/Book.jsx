import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { IoIosBookmark } from "react-icons/io";

function Book(props) {
  return (
    <li className='books-list_item'>
      {props.index}. <span style={{fontWeight:700}}>{props.title}</span> - {props.author} ({props.source})
      <AiOutlineClose onClick={() => props.delBook(props.id)} className='icon' />
      <IoIosBookmark className= {props.isFavorite ? 'icon-fav icon-fav--active' : 'icon-fav'} onClick={() => props.addToFavoritesBook(props.id)} />
    </li>
  )
}

Book.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  delBook: PropTypes.func,
  addToFavoritesBook: PropTypes.func,
  isFavorite: PropTypes.bool,
  source: PropTypes.string
}

export default Book;