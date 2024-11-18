import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";

function Book(props) {
  return (
    <li className='books-list_item'>
      {props.index}. <span style={{fontWeight:700}}>{props.title}</span> - {props.author}
      <AiOutlineClose onClick={() => props.delBook(props.id)} className='icon' />
    </li>
  )
}

Book.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  delBook: PropTypes.func
}

export default Book;