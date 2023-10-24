import axios from 'axios';

// const BASE_URL = 'http://localhost:3001/api/v1/user'; 

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/login`, {
      email: email,
      password: password,
    });
    return response.data.body.token;
  } catch (error) {
    throw error;
  }
};