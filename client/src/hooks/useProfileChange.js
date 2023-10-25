import { useCallback } from 'react';
import axios from '../utils/axios';

const useProfileChange = (fetchUserData) => {
  const handleProfileChange = useCallback(
    async (index) => {
      try {
        await axios.patch('users/mypage/edit-info', {
          imageId: index,
        });
        fetchUserData();
      } catch (error) {
        console.log('err', error);
      }
    },
    [fetchUserData],
  );

  return handleProfileChange;
};

export default useProfileChange;
