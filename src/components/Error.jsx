import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectErrorMessage } from '../errorSlice';
import { useEffect } from 'react';
import { clearError } from '../errorSlice';
import { useDispatch, useSelector } from 'react-redux';

function ErrorComponent() {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if(errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch])

  return (
    <ToastContainer position="top-right" autoClose={5000} />
  )
}

export default ErrorComponent;