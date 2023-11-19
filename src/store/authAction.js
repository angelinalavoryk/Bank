import * as apiService from '../services/api.js'; 

export const login = (email, password) => async (dispatch) => {
  try {
    const jwtToken = await apiService.login(email, password);
    localStorage.setItem('authToken', jwtToken);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: jwtToken,
    });
    // redirigez l'utilisateur vers la page de profil après une connexion réussie
    window.location.href = '/profile';
  } catch (error) {
    console.error('Erreur de connexion:', error);

    let errorMessage = 'Email ou mot de passe incorrect';

    if (error.response) {
      const errorCode = error.response.status;

      if (errorCode === 400) {
        errorMessage = 'Champs invalides ou requête incorrecte.';
      } else if (errorCode === 500) {
        errorMessage = 'Erreur interne du serveur.';
      }
    }

    dispatch({
      type: 'LOGIN_FAILURE',
      payload: errorMessage,
    });

    throw errorMessage; 
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
    
    // Mettre à jour le nom et le prénom 
    dispatch({
      type: 'UPDATE_USER_NAME_SUCCESS',
      payload: { newFirstName, newLastName },
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du nom et du prénom:', error);
  }
};



















