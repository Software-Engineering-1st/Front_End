import api from './axios';

export const login = async (userId, password) => {
  try {
    const response = await api.post('/auth/sing-up', { userId, password });
    const { data } = response.data;
    
    if (response.data.status === 0) {
      // 로그인 성공 시 토큰 저장
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('role', data.role);
      return {
        success: true,
        data: {
          accessToken: data.accessToken,
          role: data.role
        }
      };
    } else {
      throw new Error(response.data.message || '로그인에 실패했습니다.');
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '로그인 중 오류가 발생했습니다.'
    };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const checkAuth = async () => {
  try {
    const response = await api.get('/auth/check');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async ({ nickname, userId, password, checkPassword, wordCount }) => {
  try {
    const response = await api.post('/auth/signup', {
      nickname,
      userId,
      password,
      checkPassword,
      wordCount
    });

    if (response.data.status === 0) {
      return {
        success: true,
        message: response.data.message
      };
    } else {
      throw new Error(response.data.message || '회원가입에 실패했습니다.');
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '회원가입 중 오류가 발생했습니다.'
    };
  }
};

export const checkServerHealth = async () => {
  try {
    console.log('서버 상태 확인 시도...');
    const response = await api.get('/check/ping');
    console.log('서버 응답:', response);
    return {
      success: true,
      status: response.data.status,
      message: response.data.message
    };
  } catch (error) {
    console.error('서버 상태 확인 실패:', error);
    if (error.response) {
      // 서버가 응답을 반환한 경우
      console.error('응답 데이터:', error.response.data);
      console.error('응답 상태:', error.response.status);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      console.error('응답 없음:', error.request);
    } else {
      // 요청 설정 중 에러가 발생한 경우
      console.error('에러 메시지:', error.message);
    }
    return {
      success: false,
      error: '서버 연결에 실패했습니다.'
    };
  }
};

export const checkIdDuplicate = async (userId) => {
  try {
    const response = await api.post('/auth/id-check', { userId });
    if (response.data.status === 0) {
      return { success: true, message: response.data.message };
    } else {
      return { success: false, error: response.data.message };
    }
  } catch (error) {
    return { success: false, error: error.response?.data?.message || '중복 확인 중 오류가 발생했습니다.' };
  }
}; 