const initialState = {
  isAuthenticated: localStorage.getItem('authToken') ? true : false, // vérifie si un jeton d'authentification est présent dans le stockage local
  token: localStorage.getItem('authToken') || null,
  error: null,
};

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
            // retourne nouvel état en copiant l'état actuel 
          ...state,
          isAuthenticated: true,
          token: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          error: action.payload,
        };
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            token: null,
            error: null,
          };

          case 'GET_USER_PROFILE_SUCCESS':
            return {
              ...state,
              firstName: action.payload.firstName, // stockage du prénom dans le store
              lastName: action.payload.lastName, 
            };

      case 'UPDATE_USER_NAME_SUCCESS':
        return {
          ...state,
          firstName: action.payload.newFirstName,
          lastName: action.payload.newLastName,
      };
      
      default:
        // si type d'action n'est pas géré, retourne l'état actuel sans  modifier.
        return state;
    }
  };
  
  export default authReducer;


