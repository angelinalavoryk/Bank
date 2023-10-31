import * as apiService from '../services/api.js'; 

export const getUserProfile = () => async (dispatch, getState) => {
    try {
      const authToken = getState().token;
      const response = await apiService.getUserProfile(authToken);
      const { firstName, lastName } = response.body; // Extraction du prénom et du nom de famille
  
      dispatch({
        type: 'GET_USER_PROFILE_SUCCESS',
        payload: { firstName, lastName }, // Envoie le prénom et le nom de famille dans le payload
      });
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
  
      dispatch({
        type: 'GET_USER_PROFILE_FAILURE',
        payload: error.response.data.message || 'Erreur inconnue',
      });
    }
  };