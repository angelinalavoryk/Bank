import axios from 'axios';

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

export const getUserProfile = async (authToken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (authToken, newFirstName, newLastName) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/profile`,
      {
        firstName: newFirstName,
        lastName: newLastName,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

  