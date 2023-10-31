import * as apiService from '../services/api.js'; 

// Action de connexion
export const login = (email, password) => async (dispatch) => {
  try {
    const jwtToken = await apiService.login(email, password);
    localStorage.setItem('authToken', jwtToken);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: jwtToken,
    });
  
    // Redirigez l'utilisateur vers la page de profil après une connexion réussie
    window.location.href = '/profile'; 
  } catch (error) {
    console.error('Erreur de connexion:', error);

    if (error.response) {
      const errorCode = error.response.status;

      if (errorCode === 400) {
        console.error('Champs invalides ou requête incorrecte.');
      } else if (errorCode === 500) {
        console.error('Erreur interne du serveur.');
      }
    }

    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response.data.message || 'Erreur inconnue',
    });
  }
};




export const logout = () => (dispatch) => {
  // supprimer token du stockage local
  localStorage.removeItem('authToken');
  
  // déclencher une action de déconnexion
  dispatch({
    type: 'LOGOUT',
  });
  window.location.href = '/';
};















