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



export const updateUserName = (newFirstName, newLastName) => async (dispatch, getState) => {
  try {
    const authToken = getState().token;
    await apiService.updateUserProfile(authToken, newFirstName, newLastName);
    
    // Mettre à jour le nom et le prénom dans le store Redux
    dispatch({
      type: 'UPDATE_USER_NAME_SUCCESS',
      payload: { newFirstName, newLastName },
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du nom et du prénom:', error);
  }
};




















