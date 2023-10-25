import { useEffect } from 'react';
import axios from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/userActions';

const useUserData = () => {
  const userData = useSelector((state) => state.user.userData);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    try {
      const response = await axios.get('users/mypage');
      dispatch(login(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');

    if (!storedToken) {
      dispatch(logout());
    } else {
      fetchUserData();
    }
  }, []);

  return { userData, isLoggedIn, fetchUserData };
};

export default useUserData;
